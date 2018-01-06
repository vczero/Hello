var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    menu: 'menu-weizhi-kuaiji'
  });
});

router.get('/weizhi/kuaiji.html', function(req, res, next) {
  res.render('index', {
    menu: 'menu-weizhi-kuaiji'
  });
});

router.get('/weizhi/fangjia.html', function(req, res, next) {
  res.render('weizhi/fangjia', {menu: 'menu-weizhi-fangjia'});
});

module.exports = router;
