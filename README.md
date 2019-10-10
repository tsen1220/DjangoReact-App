# 目錄

[啟動](#啟動)

[簡介](#簡介)

[新話題](#新話題)

[留言](#留言)

[登入](#登入)

[註冊](#註冊)

# 啟動

## 前端

React/Redux 開發。

請先安裝 Node 與 Npm。

並輸入下面的指令安裝 modules。

```
$ npm install
```

啟動伺服器

```
$ npm start
```

預設 Port 為 3000，位於 localhost。

## 後端

Python Django 開發。

須先進入虛擬環境。

```
$ cd env
$ Scripts/activate
```

成功進入虛擬環境後進入 src 目錄，並安裝所需 modules。

```
$ pip install -r requirements.txt
```

安裝完成後，啟動伺服器 Server。

```
$ py manage.py runserver
```

# 介紹

這是一個簡易的論壇，使用者可以發佈談話主題，其他用戶看到感興趣的主題，可以點進去並回文，並與其他用戶進行互動。

<img src='https://raw.githubusercontent.com/tsen1220/DjangoReact-MessageBoard/master/intro/Home.jpg' alt=''>

# 新話題

使用者登入後可以在 Posts 的位置發佈主題，或至主題列最下方發佈。
