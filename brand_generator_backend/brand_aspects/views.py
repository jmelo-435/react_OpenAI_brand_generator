from rest_framework.views import APIView
from brand_aspects.serializers import Business_Info_Serializer
from rest_framework.response import Response
# Create your views here.

class Brand(APIView):
    def post(self, request,format=None):
        serializer = Business_Info_Serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        response_data  = {"requested":request.data,"response":"the response"}
        return Response(response_data)