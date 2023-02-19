from rest_framework import serializers
from brand_aspects.models import Business_Info


class Business_Info_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Business_Info
        fields=[
            "name",
            "keywords",
            "type",
            "description",
            "atributes",
        ]