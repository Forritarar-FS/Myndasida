from django.shortcuts import render
from .models import MyUserManager
from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from django.conf import settings
from django.shortcuts import redirect

# Create your views here.
#def home():

def log_in(request):
    if not request.user.is_authenticated():
        return redirect('%s?next=%s' % (settings.LOGIN_URL, request.path))
    user_name=request.GET['Username']
    passw = request.GET['Password']
    user = authenticate(email=user_name, password=passw)
    if user is not None:
        if user.is_active:
            login(request, user)
            return HttpResponse("login successful")
        else: return HttpResponse("disabled account")
    else: return HttpResponse("invalid login")
