from django.db import models
from django.contrib.auth.models import AbstractBaseUser

# Create your models here.
class Client(models.Model):
   email = models.EmailField(unique=True, max_length=100)
   password = models.CharField(max_length=128)
