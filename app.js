const express=require('express');
const dotenv=require('dotenv');
const app=express();
const authRoutes= require('./routes/auth');
dotenv.config();
app.use (express.json());
app.use('/api/auth',authRoutes);
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`🚀 Server running on port ${PORT}`)
});