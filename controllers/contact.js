const mongodb = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

const getAllContact = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('Contact').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists); // we just need the first one (the only one)
  });
};
const getSingleContact = async (req, res, next) => {
  const userId = new ObjectId(req.params.id)
  const result = await mongodb.getDb().db().collection('Contact').find({_id:userId});
  result.toArray().then((user) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(user[0]); // we just need the first one (the only one)
  });
};
const getHello = async (req, res, next) => {
  res.send("Hello");
};
const getIndex = async (req, res,next) => {
  res.send("There is nothing interesting here");
};

module.exports = {
   getAllContact,
   getSingleContact,
   getHello,
   getIndex

 };