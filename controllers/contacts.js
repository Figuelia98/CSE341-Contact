const mongodb = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

const getAllContact = async (req, res, next) => {
  //#swagger.tags=['Contacts'];
  const result = await mongodb.getDb().db().collection('Contact').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists); // we just need the first one (the only one)
  });
};
const getSingleContact = async (req, res, next) => {
   //#swagger.tags=['Contacts'];
  const userId = new ObjectId(req.params.id)
  const result = await mongodb.getDb().db().collection('Contact').find({_id:userId});
  result.toArray().then((user) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(user[0]); // we just need the first one (the only one)
  });
};
const createContact = async (req,res)=>{
   //#swagger.tags=['Contacts'];
  const contact = {
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    favoriteColor:req.body.favoriteColor,
    birthday:req.body.birthday,

  }
  const response = await mongodb.getDb().db().collection('Contact').insertOne(contact);
  if(response.acknowledged > 0){
    res.status(204).send();
  }
  else{
    res.status(500).json(response.error ||"Some error occur while inserting contact");
  }


};
const updateContact = async (req,res)=>{
//#swagger.tags=['Contacts'];
const userId = new ObjectId(req.params.id)
  const contact = {
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    favoriteColor:req.body.favoriteColor,
    birthday:req.body.birthday,

  }
  const response = await mongodb.getDb().db().collection('Contact').replaceOne({_id:userId},contact);
  if(response.modifiedCount > 0){
    res.status(204).send();
  }
  else{
    res.status(500).json(response.error ||"Some error occur while updating contact");
  }

};
const deleteContact = async (req,res)=>{
//#swagger.tags=['Contacts'];
const userId = new ObjectId(req.params.id)
  const response = await mongodb.getDb().db().collection('Contact').deleteOne({_id:userId});
  if(response.deletedCount > 0){
    res.status(204).send();
  }
  else{
    res.status(500).json(response.error ||"Some error occur while updating contact");
  }
};

module.exports = {
   getAllContact,
   getSingleContact,
   createContact,
   updateContact,
   deleteContact,

 };