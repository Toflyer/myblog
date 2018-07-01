var express = require('express');
var querystring = require('querystring');
const fs = require("fs");
const path = require("path");
var mysql = require('mysql');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var pool = mysql.createPool({
	host: '127.0.0.1',
	port: 3306,
	database: 'myblog',
	user: 'root',
	password: 'root',
});
var app = express();
/*app.get('/index.html',function (req,res){
	res.send('121233');
});*/

app.get('/api/other.html', function(req, res) {
	/*	req.on('data',function(data)
		{*/
	console.log(1);
	/*var book=querystring.parse(data.toString());*/
	pool.getConnection(function(err, connection) {
		if(err)
			res.send('与MySQL数据库建立连接失败。');
		else {
			/*var str;
			connection.query('INSERT INTO book SET ?',book,function(err,result){
				if(err) 
					str='在服务器端MySQL数据库中插入数据失败。';
				else
					str='在服务器端MySQL数据库中插入数据成功。';
				connection.release();
				res.send(str);
			});*/
			connection.query('SELECT * from myblog', function(err, result) {
				if(err) {
					str = '在服务器端MySQL数据库中插入数据失败。';
				} else {
					str = '在服务器端MySQL数据库中插入数据成功。';
				}
				res.send(result);
			})
			connection.end();

		}
	});
	/*	});*/
});

app.post('/api/upLeaveing', function(req, res) {
	/*	req.on('data',function(data)
		{*/
	/*var book=querystring.parse(data.toString());*/
	console.log(1);
	req.on('data', function(data) {
		var obj = data.toString();
		obj = JSON.parse(obj);
		/*console.log(typeof(book));
		console.log(book.name);
		console.log(book.date);
		console.log(book.context);*/
		var str = `INSERT INTO Message (name,date,context)
VALUES ('${obj.name}','${obj.date}','${obj.context}');`;
		console.log(str);
		pool.getConnection(function(err, connection) {
			if(err)
				res.send('与MySQL数据库建立连接失败。');
			else {
				connection.query(str, function(err, result) {
					if(err) {
						console.log('在服务器端MySQL数据库中插入数据失败。');
						console.log(err.message);
					} else {
						console.log('在服务器端MySQL数据库中插入数据成功。');
					}
				})
				connection.query('SELECT * from Message', function(err, result) {
					if(err) {
						console.log('在服务器端MySQL数据库中查询数据失败。');
					} else {
						console.log('在服务器端MySQL数据库中查询数据成功。');
					}
					res.send(result);
				})
				connection.end();
			}
		});
	});
	/*	});*/
});



app.post('/api/getLeaveing', function(req, res) {
	/*	req.on('data',function(data)
		{*/
	/*var book=querystring.parse(data.toString());*/
	console.log(1);
		pool.getConnection(function(err, connection) {
			if(err)
				res.send('与MySQL数据库建立连接失败。');
			else {
				connection.query('SELECT * from Message', function(err, result) {
					if(err) {
						console.log('在服务器端MySQL数据库中查询数据失败。');
					} else {
						console.log('在服务器端MySQL数据库中查询数据成功。');
					}
					res.send(result);
				})
				connection.end();
			}
		});

	/*	});*/
});

app.use(express.static(path.resolve(__dirname, "./dist")));
app.get("*", function(req, res) {
  const html = fs.readFileSync(path.resolve(__dirname, "./dist/index.html"));
  res.send(html);
});




app.listen(1337, "127.0.0.1");


