from django.shortcuts import render, get_object_or_404
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Services, Workers, Users
from .serializers import ServiceSerializer, WorkerSerializer, UserSerializer


def main_site(request):
    return render(request, 'index.html')


@api_view(['POST'])
def user_login(request):

    if request.method == 'POST':
        obj = get_object_or_404(Users, username=request.data['username'])
        print(obj.password)
        if obj.password == request.data['password']:
            serializer = UserSerializer(obj)
            print(f"Over Here {request.data['username']}")
            Response(serializer.data)

class ServiceViewSet(ModelViewSet):
    queryset = Services.objects.all()
    serializer_class = ServiceSerializer
