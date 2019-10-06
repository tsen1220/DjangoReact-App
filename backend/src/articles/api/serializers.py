from rest_framework import serializers

from articles.models import Article

# 使用rest_framework 建立RESTful API
# 建立API的格式
# class Meta:
#      model =建立API 的 model
#      fields = API建立 的 內容物(model結構)


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title', 'content')
