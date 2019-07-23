from django.urls import path, include
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static

from .views import *

router = routers.DefaultRouter()
router.register('services', ServiceViewSet)

urlpatterns = [
    path('', main_site),
    path('auth/', main_site),
    path('user/', main_site),
    path('auth/signup/', main_site),
    path('auth/login/', main_site),
    # path("api/services/", service_list),
    # path("api/services/<int:pk>/", service_detail)
    path("api/", include(router.urls)),
    path("login/", user_login),
    path("signup/", user_signup),
    path("email_change/<str:username>/", change_email),
    path("password_change/<str:username>/", change_password),
    path("profile/<str:username>/", profile_picture_upload),
    path("bitcoin_address/", get_bitcoin_address),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)