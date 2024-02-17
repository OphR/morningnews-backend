var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const NEWS_API_KEY = process.env.NEWS_API_KEY;

router.get('/articles', (req, res) => {
  fetch(`http://newsapi.org/v2/top-headlines?sources=tech-crunch&apiKey=c7cf4caa6117469a9ce126d1a741910c`)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok') {
        res.json({ articles: data.articles });
      } else {
        res.json({ articles: [] });
      }
    });
});

module.exports = router;
