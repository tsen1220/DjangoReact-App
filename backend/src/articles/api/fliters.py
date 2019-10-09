import django_filters.rest_framework
from articles.models import Comment

# 篩選器 fields為想篩選的欄位


class CommentFilter(django_filters.FilterSet):
    class Meta:
        model = Comment
        fields = ['article', 'user']
