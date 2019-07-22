from rest_framework import serializers
from . import models

class ServiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Services
        fields = ["header", "content", "iconName", "backgroundImage"]
    
class WorkerSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Workers
        fields = ["name", "title", "imageURL"]


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Users
        fields = ["username", "email", "password", "trader_id"]