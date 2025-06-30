const express=require('express');
const router= express.Router();
const db= require('../db');
const bcrypt= require('bcrypt');
const jwt=require('jsonwebtoken');
exports.register=async(req,res)=>{
    const{name,email,password}=req.body;
    
    if(!name || !password || !email){
        return res.status(400).json({message:'Missing require fields'});
    }
   
    try{
   //1. check user exists or not
   const[[existinguser]]=await db.query('SELECT * FROM users WHERE name=?',[name]);
   if(existinguser){
    return res.status(409).json({message:'user already exists'});
   }
   //2.hash password
   const hashedPassword= await bcrypt.hash(password,10);

   //Insert new user 
    await db.query('INSERT INTO users(name,email,password) VALUES(?,?,?) ',
    [name,email,hashedPassword]);
    //sending confirmation message
    res.status(201).json({message:'User created successfully'});
    }
    catch(error){
        console.error(error); 
   res.status(500).json({message:'Interval Server Error'});
    }
};
exports.login=async(req,res)=>{
   const{name,password}=req.body;

   if(!name || !password){
    return res.status(400).json({message:'Missing Credential'});
   }

   try{
     const[[user]]=await db.query('SELECT * FROM users WHERE name=?',[name]);
     if(!user){
        return res.status(401).json({message:'User not found'});
     }
     //check passwords
     const isMatch=await bcrypt.compare(password,user.password);
     if(!isMatch){
        return res.status(401).json({message:'Invalid Password'});
     }
     //If user exists and password matched then generate jwt token
     const token= jwt.sign(
        {id: user.id,name:user.name},
        process.env.JWT_SECRET,
        {expiresIn:'1h'}
     );
     res.status(200).json({message:'Login Successful',token});
   }
   catch(error){
    console.error(error);
    res.status(500).json({message:'Internal Server error'});
   }

};