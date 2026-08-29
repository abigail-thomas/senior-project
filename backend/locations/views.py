import requests
from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse

def cost_of_living(request):
    city = request.GET.get("city")
    currency = request.GET.get("currency")

    response = requests.get(
        f"http://localhost:3000/{city}?{currency}"
    )

    data = response.json()
    # set safe to false so we can return a list, not a dict
    return JsonResponse(data, safe=False)