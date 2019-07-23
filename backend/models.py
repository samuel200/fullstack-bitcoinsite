from django.db import models
from random import randint

# Create your models here.

class Services(models.Model):
    header = models.CharField(max_length=100)
    content = models.TextField(blank=False)
    iconName = models.CharField(max_length=100)
    backgroundImage = models.ImageField(default="default-img.jpg")

    def __str__(self):
        return self.header

class Users(models.Model):
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True, blank=False)
    password = models.CharField(max_length=100)
    balance = models.FloatField(default=0)
    trader_id = models.IntegerField(default=randint(100000000, 9999999999))
    profile_image = models.ImageField(default="default-profile-picture.jpg")
    
    def __str__(self):
        return self.username

class Withdrawals(models.Model):
    transaction_time = models.DateTimeField(auto_now_add=True)

class Deposits(models.Model):
    transaction_time = models.DateTimeField(auto_now_add=True)

class Plans(models.Model):
    name = models.CharField(max_length=50)
    price = models.IntegerField()
    interest_rate = models.FloatField()
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    withdrawal = models.ForeignKey(Withdrawals, on_delete=models.CASCADE, related_name="withdrawalset")
    deposit = models.ForeignKey(Withdrawals, on_delete=models.CASCADE, related_name="depositset")



class Workers(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    imageURL = models.ImageField()

    def __str__(self):
        return self.name

class BitcoinAddress(models.Model):
    address = models.CharField(max_length=100, blank=True)

