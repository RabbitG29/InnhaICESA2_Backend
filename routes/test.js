const express = require('express');
const con = require('../connection');
const router = express.Router();
const Book = require('../models/book');
//모든 책 조회
router.get("/", function(req, res, next) {
	Book.find(function(err, books) {
		if(err)
			throw err;
		else
			res.send(JSON.stringify(books));
	});
});
//책 ID로 조회
router.get("/:id", function(req, res, next) {
	Book.findOne({_id: req.params.id}, function(err, book) {
		if(err)
			throw err;
		if(!book)
			res.send({status: "fail"});
		else
			res.send(JSON.stringify(book));
	});
});
//책 삽입
router.post('/', function(req, res) {
	var book = new Book();
	book.title = req.body.name;
	book.author = req.body.author;
	book.published_date = new Date(req.body.published_date);
	book.save(function(err) {
		if(err)
			throw err;
		else
			res.send({result:1});
	});
});
//책 정보 수정
router.put("/:id", function(req, res, next) {
	Book.findById(req.params.id, function(err, book) {
		if(err) throw err;
		if(!book) res.send({status:"fail"});
		if(req.body.name) book.title = req.body.name;
		if(req.body.author) book.author = req.body.author;
		if(req.body.published_date) book.published_date = req.body.published_date;
		book.save(function(err) {
			if(err) throw err;
			else
				res.send({status:"success"});
		});
	});
});
//책 삭제
router.delete("/:id", function(req, res, next) {
	Book.remove({ _id: req.params.id }, function(err, output) {
		if(err) throw err;
		else
			res.send({status:"success"});
	});
});

module.exports = router;
