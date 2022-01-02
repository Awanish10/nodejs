var express = require('express');
var router = express.Router();
var mysql = require('mysql');
console.log(mysql);
var con = mysql.createConnection({
  host: "localhost",
  user: "awanish",
  password: "123456",
  database: "project"
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'login' });
});

router.get('/view', function(req, res, next) {
  var sql = "SELECT * FROM students";
  con.query(sql,function (err,result){
    if(err) throw err;
    res.render('view', { 'viewData': result });
    //console.log(result[0]);
  });

});
router.get('/add', function(req, res, next) {
  res.render('add', { title: 'add' });
});
router.post('/postaction', function(req, res, next) {
  if(req.body.sub=='Submit'){
    //console.log(req.body);
    var name = req.body.name;
    var email= req.body.email;
    var mobi = req.body.mobi;
    var pass = req.body.pass;
    var sql = "INSERT INTO students (name, email,mobile,password) VALUES ('"+name+"','"+email+"','"+mobi+"','"+pass+"')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
      res.redirect('/view');
    });
  }
  if(req.body.upsubmit=='update'){
    var name = req.body.name;
    var email= req.body.email;
    var mobi = req.body.mobi;
    var upid = req.body.upid;
    var sql = "UPDATE students SET name='"+name+"',email='"+email+"',mobile='"+mobi+"' WHERE ID='"+upid+"'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
      res.redirect('/view');
    });

  }
  //console.log(req.body);
});
router.get('/update/:id',function(req,res,next){
  var ids = req.params.id; 
       sql = "SELECT * FROM students WHERE ID='"+ids+"'" ;
       con.query(sql,function (err,result){
        if(err) throw err;
        res.render('update', { 'upData': result });
        console.log(result[0]);
      });


});
router.get('/delete/:id',function (req,res,next){
  ids = req.params.id; 
  sql = "DELETE FROM students WHERE ID='"+ids+"'";
  console.log(sql);
       con.query(sql,function (err,result){
        if(err) throw err;
        
       });
       res.redirect('/view');
});

module.exports = router;
