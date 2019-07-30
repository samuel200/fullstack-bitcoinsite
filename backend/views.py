from django.shortcuts import render, get_object_or_404
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.files.storage import FileSystemStorage
from django.views.decorators.csrf import csrf_exempt

import json

from .models import Services, Workers, Users
from .serializers import *


def main_site(request):
    return render(request, 'index.html')


@api_view(['POST'])
def user_login(request):

    if request.method == 'POST':
        try:
            obj = Users.objects.get(username=request.data['username'])
            
            if obj.password == request.data['password']:
                return Response(UserSerializer(obj).data, status=status.HTTP_200_OK)
            
            else:
                raise Users.DoesNotExist

        except Users.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def user_signup(request):
    
    if request.method == 'POST':
        obj = Users.objects.create(username=request.data['username'], 
            email=request.data['email'], 
            password=request.data['password'])
        obj.save()
        serializer = UserSerializer(obj)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def change_email(request, username):
    obj = Users.objects.get(username=username)
    obj.email = request.data['email']
    obj.save()
    return Response(UserSerializer(obj).data, status=status.HTTP_200_OK)

@api_view(['POST'])
def change_password(request, username):
    obj = get_object_or_404(Users, username=username)
    obj.password = request.data['password']
    obj.save()
    return Response(UserSerializer(obj).data, status=status.HTTP_200_OK)

@api_view(['POST'])
@csrf_exempt
def profile_picture_upload(request, username):
    if request.method == 'POST' and request.FILES['profile-image']:
        obj = Users.objects.get(username=username)
        myfile = request.FILES['profile-image']
        obj.profile_image = myfile
        obj.save()
        fs = FileSystemStorage()
        filename = fs.save(myfile.name, myfile)
        uploaded_file_url = fs.url(filename)
        return Response(UserSerializer(obj), status=status.HTTP_200_OK)
    return Response(status=status.HTTP_304_NOT_MODIFIED)

@api_view(['GET'])
def get_bitcoin_address(request):
    obj = models.BitcoinAddress.objects.all()[0]
    serializer = BitcoinAddressSerializer(obj)
    return Response(serializer.data, status=status.HTTP_200_OK)

class ServiceViewSet(ModelViewSet):
    queryset = Services.objects.all()
    serializer_class = ServiceSerializer
