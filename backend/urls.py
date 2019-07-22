from django.urls import path, include
from rest_framework import routers
# from .views import main_site, service_list, service_detail, ServiceViewSet

from .views import main_site, ServiceViewSet, user_login

router = routers.DefaultRouter()
router.register('services', ServiceViewSet)

urlpatterns = [
    path('', main_site),
    # path("api/services/", service_list),
    # path("api/services/<int:pk>/", service_detail)
    path("api/", include(router.urls)),
    path("login/", user_login)
]
