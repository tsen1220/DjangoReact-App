from articles.models import Article, Comment
from .serializers import ArticleSerializer, CommentSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView


class ArticleListView(ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class CommentListView(ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class ArticleDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class CommentDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


# 列出該位置資料庫所有內容 格式為JSON


# class ArticleListView(ListAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

# 選取資料庫特定資料 以primary key來索取


# class ArticleDetailView(RetrieveAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

# 在資料庫列表建立新資料 路徑為 /create


# class ArticleCreateView(CreateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

# 選取的資料進行更新 路徑為 pk/update


# class ArticleUpdataView(UpdateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

# 選取的資料移除 路徑為 pk/delete


# class ArticleDeleteView(DestroyAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer


# REST FRAMEWORK提供的 viewsets 包含上述功能 路徑參考官方文件
# from rest_framework import viewsets
# class ArticleViewSet(viewsets.ModelViewSet):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
