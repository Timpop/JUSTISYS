"""foresee URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from homepage import views, forms

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', views.home, name='home'),
    # url(r'^form/$', views.myform, name='form'),
    # url(r'^result/', views.result, name='result'),
    # url(r'^create_post/$', views.create_post),
    url(r'^search_verdict/$', views.search_verdict),
    url(r'^show_summary/([0-9]+)$', views.show_summary),
    url(r'^verdict/([0-9]+)$', views.full_content),
]
