# API路徑 <pk>primary key
from django.urls import path
from .views import ArticleListView, ArticleDetailView, ArticleCreateView, ArticleUpdataView, ArticleDeleteView

urlpatterns = [
    path('', ArticleListView.as_view()),
    path('create/', ArticleCreateView.as_view()),
    path('<pk>', ArticleDetailView.as_view()),
    path('<pk>/update/', ArticleUpdataView.as_view()),
    path('<pk>/delete/', ArticleDeleteView.as_view()),
]


# REST FRAMEWORK提供的 viewsets 包含上述功能 路徑參考官方文件
# from .views import ArticleViewSet
# from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'', ArticleViewSet, basename='articles')
# urlpatterns = router.urls
