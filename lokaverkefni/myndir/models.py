from django.db import models
from django.contrib.auth.models import AbstractBaseUser

# Create your models here.
class User(AbstractBaseUser):
    email = models.EmailField('email address', unique=True, db_index=True)
    joined = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'email'

    def __unicode__(self):
        return self.email
