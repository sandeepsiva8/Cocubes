var express = require('express');
var router = express.Router();
var monk = require('monk');
var formidable = require('formidable');
var multer= require('multer');
var db = monk('localhost:27017/ACET');
var collection = db.get('CSE');
var fbk = db.get('feedback2');
var filec = db.get('files');
var students = db.get('students');
var cocubes = db.get('cocubes');
//student panel
router.get('/student', function(req, res) {
  res.render('index');
});

router.get('/login', function(req, res) {
  res.render('login');
});
//admin panel
router.get('/admin',function(req,res){
  fbk.find({},function(err,docs){
    console.log(docs);
    res.locals.data = docs;
    res.render('admin');
  });
});
var storage = multer.diskStorage({ //multer disk storage settings
        destination: function(req, file, cb) {
            cb(null, 'upload/');
        },
        filename: function (req,file,cb) {
          //var datetimestamp= Date.now();
          cb(null, file.originalname);
        }
});
var upload = multer({
                    storage: storage,
}).single('File');
//var upload = multer({ dest: 'uploads/' })

router.post('/files', upload, function(req, res) {
  console.log(req.file.originalname);
  var data3={
      File : req.file.originalname
  }
  filec.insert(data3);
    res.redirect('/admin');
});    

//login page
router.get('/',function(req,res){
  if(req.session && req.session.user){
    res.locals.user = req.session.user;
    res.render('view');
  }
  else{
    res.render('login');
  }
});
//post login
router.post('/login',function(req,res){
  collection.findOne({"rollno":req.body.username,"password":req.body.password},function(err,docs){
    if(!docs){
      console.log('not success');
      res.render('admin', { error: 'Invalid username or password.' });
    }
    else{
      delete docs.password;
      req.session.user = docs;
      console.log('success');
      res.redirect('/');
    }
  });
});
router.post('/getgraph', function(req,res){
  var rollno = req.body.num;
  //console.log(rollno+'getgraph');
  cocubes.find({"RollNumber":rollno}, function(err,docs1){
    // var score = docs1[0].Score;
    // var aptitude = docs1[0].Aptitude;
    // var english = docs1[0].English;
    // var quantitative = docs1[0].Quantitative;
    // var analytical = docs1[0].Analytical;
    // var domain = docs1[0].Domain;
    // var computer = docs1[0].ComputerFundamentals;
    // var coding = docs1[0].Coding;
    // var written = docs1[0].WrittenEnglish;
    // res.locals.score=score;
    // res.locals.aptitude=aptitude;
    // res.locals.english=english;
    // res.locals.quantitative=quantitative;
    // res.locals.analytical=analytical;
    // res.locals.domain=domain;
    // res.locals.computer=computer;
    // res.locals.coding=coding;
    // res.locals.written=written;
    res.send(docs1);
});
});
router.get('/logout',function(req,res){
  req.session.reset();
  res.redirect('/login');
});
router.get('/home1',function(req,res){
  req.session.reset();
  res.redirect('/login');
});
router.post('/feedback2',function(req,res){
    console.log(req.body.facultyname);
    console.log(req.body.facultyemail);
    console.log(req.body.facultymobile);
    console.log(req.body.feedback);
      var data2 = {
        Name: req.body.facultyname,
        Email: req.body.facultyemail,
        Contact: req.body.facultymobile,
        Feedback: req.body.feedback
      }
      fbk.insert(data2);
      res.redirect('/');
});
router.post('/cocubesdata',function(req,res){
    var aec = req.body.aec
    console.log(aec);
    var acet = req.body.acet
    console.log(acet);
    var acoe = req.body.acoe
    console.log(acoe);
    var cse = req.body.cse
    console.log(cse);
    var agri = req.body.agri
    console.log(agri);
    var min = req.body.min
    console.log(min);
    var it = req.body.it
    console.log(it);
    var ece = req.body.ece
    console.log(ece);
    var eee = req.body.eee
    console.log(eee);
    var mca = req.body.mca
    console.log(mca);
    var civil = req.body.civil
    console.log(civil);
    var pt = req.body.pt
    console.log(pt);
    var me = req.body.me
    console.log(me);
    var ssc = req.body.ssc
    console.log(ssc);
    var salary = req.body.salary
    console.log(salary);
    var inter = req.body.inter
    console.log(inter);
    var diploma = req.body.diploma
    console.log(diploma);
    var btech = req.body.btech
    console.log(btech);
    var backlogs = req.body.backlogs;
    console.log(backlogs);
    var male = req.body.male
    console.log(male);
    var female = req.body.female
    console.log(female);
    students.find({$and:[
      {$or:[{"College":aec},{"College":acet},{"College":acoe}]},
      {$or:[{"Branch":cse},{"Branch":agri},{"Branch":min},{"Branch":it},{"Branch":ece},{"Branch":eee},{"Branch":mca},{"Branch":civil},{"Branch":pt},{"Branch":me}]},
      {$or:[{"SSC":{$gte:ssc}},{"INTER":{$gte:inter}},{"DIPLOMA":{$gte:diploma}},{"BTech":{$gte:btech}}]},
      {"Backlogs":{$lte:backlogs}},
      {$or:[{"Gender":male},{"Gender":female}]},
      {$or:[{"Package":{$gte:salary}}]}
      ]
    }, function(err,docs){
      if(err){
        console.log(err)
      }
      else{
        console.log(docs);
        res.send(docs);
      }
    });
});
module.exports = router;