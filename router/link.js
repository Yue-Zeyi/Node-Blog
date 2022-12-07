/**
 * 链接子应用
 */

const express = require('express');
const article = require('../middleware/article');
const category = require('../middleware/category');
const auth = require('../middleware/auth');

// 链接子应用
const linkApp = express();

// 加载链接页面
linkApp.get('/', [article.getListBykeywrod, category.getList, auth.getUser], (req, res) => {
  let { articles, categories, user } = req;
  res.render('link', {
    articles: articles,
    categories: categories,
  });
});

module.exports = linkApp;
