from django.db import models

# 資料庫結構設定，寫好要:                 一二步目的:
# 1. py manage.py makemigrations       建立資料庫表單
# 2. py manage.py migrate
# 3. import進admin(供最高權限者管理)


class Article(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()

    def __str__(self):
        return self.title
