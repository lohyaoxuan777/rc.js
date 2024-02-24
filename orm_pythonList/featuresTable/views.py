from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    return HttpResponse("""
    <title>featuresTable</title>
    wistTnow
    <br>
    abcNow
    <br>
    piE
    <br>
    wistDnow
    <br>
    CarBrand
    """)