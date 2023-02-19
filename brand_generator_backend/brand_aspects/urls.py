# example/urls.py
from django.urls import path

from brand_aspects.views import Brand


urlpatterns = [
    path('', Brand.as_view(),name='brand_endpoint'),
]