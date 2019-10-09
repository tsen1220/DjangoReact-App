# API路徑 <pk>primary key
from django.urls import path
from .views import ArticleListView, CommentListView, ArticleDetailView, CommentDetailView

urlpatterns = [
    path('article/', ArticleListView.as_view()),
    path('article/<pk>', ArticleDetailView.as_view()),
    path('comment/', CommentListView.as_view()),
    path('comment/<pk>', CommentDetailView.as_view())

]


# REST FRAMEWORK提供的 viewsets 包含上述功能 路徑參考官方文件
# from .views import ArticleViewSet
# from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'', ArticleViewSet, basename='articles')
# urlpatterns = router.urls
