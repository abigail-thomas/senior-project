from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse

def cost_of_living(request):
    city = request.GET.get("city")
    currency = request.GET.get("currency")

    return JsonResponse({
        "city": city,
        "currency": currency,
    })