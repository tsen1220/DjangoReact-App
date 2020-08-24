from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from rest_framework import serializers
from articles.models import Article, Comment

# 使用rest_framework 建立RESTful API
# 建立API的格式
# class Meta:
#      model =建立API 的 model
#      fields = API建立 的 內容物(model結構)

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title', 'content', 'user', 'created', 'updated')

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'article', 'content', 'user', 'created', 'updated')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email')

class TokenSerializer(serializers.ModelSerializer):
    user = UserSerializer()

# fields必須為表單建立時的欄位
    class Meta:
        model = Token
        fields = ('key', 'user')
