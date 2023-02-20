from django.db import models

# Create your models here.
class Business_Info(models.Model):
    
    name = models.CharField(max_length=60,null=False,blank=True)
    keywords = models.JSONField(null=False,blank=False,max_length=5)
    type = models.CharField(max_length=20,null=False,blank=False)
    description=models.TextField(max_length=400,null=False,blank=True)
    atributes = models.JSONField(null=False,blank=False,max_length=5)
