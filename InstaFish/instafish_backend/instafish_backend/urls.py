"""instafish_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.urlpatterns import format_suffix_patterns
from instafish import views
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('current_user/', views.current_user),
    path('users/', views.UserList.as_view()),
    path('profile/', views.ProfileView.as_view()),
    path('profile/<pk>', views.ProfileDetailView.as_view()),
    path('profile/<pk>/posts', views.ProfilePostView.as_view()),
    path('profile/<pk>/comments', views.ProfileCommentView.as_view()),
    path('profile/<pk>/followers', views.ProfileFollowersView.as_view()),
    path('profile/<pk>/follower_posts', views.ProfileFollowerPostView.as_view()),
    path('post/', views.PostView.as_view()),
    path('post/<pk>', views.PostDetailView.as_view()),
    path('post/<pk>/comments', views.CommentView.as_view()),
    path('post/<pk>/likes', views.PostLikeView.as_view()),
    path('event/', views.EventView.as_view()),
    path('event/<pk>/', views.EventDetailView.as_view()),
    path('event/<pk>/users', views.EventUserView.as_view()),
    path('token-auth/', obtain_jwt_token),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns = format_suffix_patterns(urlpatterns)
