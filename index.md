---
title: Главная
layout: layout.njk
---

Добро пожаловать на сайт, посвящённый архитектуре Перми.

## Статьи

{% for post in collections.article | reverse %}
- [{{ post.data.title }}]({{ post.url }})
  {% endfor %}
