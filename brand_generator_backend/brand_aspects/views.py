from rest_framework.views import APIView
from brand_aspects.serializers import Business_Info_Serializer
from rest_framework.response import Response
from .services.gpt3 import generate_brand
# Create your views here.

class Brand(APIView):
    def post(self, request,format=None):
        serializer = Business_Info_Serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        response = generate_brand(request.data)
        response_data  = {"requested":request.data,"brand":response}
        return Response(response_data)