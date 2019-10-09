from django.db import models

# 資料庫結構設定，寫好要:                 一二步目的:
# 1. py manage.py makemigrations       建立資料庫表單
# 2. py manage.py migrate
# 3. import進admin(供最高權限者管理)


class Article(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    user = models.CharField(max_length=50, default='tsen')
    created = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated = models.DateTimeField(auto_now=True, auto_now_add=False)

    def __str__(self):
        return self.title


class Comment(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    content = models.CharField(max_length=100, blank=True)
    user = models.CharField(max_length=50, default='tsen')
    created = models.DateTimeField(auto_now=True, auto_now_add=False)
    updated = models.DateTimeField(auto_now=False, auto_now_add=True)

    def __str__(self):
        return self.content
