from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, ProjectViewSet



router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'projects', ProjectViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    #    path('auth/', include('djoser.urls')),
    # path('auth/', include('djoser.urls.jwt')),

]
