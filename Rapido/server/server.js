const cors=require("cors")
const express=require("express")
const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const alert=require("alert")
const app=express();
const middleware=require("./middleware")
const { json } = require("express")
app.use(express.json());
app.use(cors());
app.listen("1000",(req,res)=>{
    console.log("ok")
})
mongoose.connect("mongodb://localhost:27017/rapido",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err){console.log("connected")}
    else{console.log("noit connected")}
})
app.get("/",async(req,res)=>{
    res.send("hello")
})
const schema=mongoose.Schema({
    "name":String,
    "email":String,
    "pass":String
})
const Customer=mongoose.model("customer",schema);
const schem=mongoose.Schema({
    "name":String,
    "email":String,
    "pass":String,
    "vehicle":String
})
const Driver=mongoose.model("driver",schem);

const ride=mongoose.Schema({
    "from":String,
    "to":String,
    "veh":String,
    "person":{
        type:mongoose.Schema.Types.ObjectId,
        ref:"customer"
    },
    "date":{
        type:Date,
        default:Date.now(),
    }
})
const Ride=mongoose.model("pending ride",ride)
const completed=mongoose.Schema({
    "driver":{
        type:mongoose.Schema.Types.ObjectId,
        ref:"driver"
    },
    "from":String,
    "to":String,
    "bookedby":String,
    "bookedon":Date,
    "completedon":{
        type:Date,
        default:Date.now()
    },
    "veh":String,
    "bookedid":{
        type:mongoose.Schema.Types.ObjectId,
        ref:"customer"                                
    }
})
const Completed=mongoose.model("completed rides",completed)

app.post("/creg",async(req,res)=>{
    const {name,email,pass}=req.body;
    const use=new Customer({
        name,email,pass
    })
    let exist=await Customer.findOne({email:email});
    if(exist){
        alert("user exist")
    }
    else{
       await  use.save();
        alert("user registered")
    }
})
app.post("/clogin",async(req,res)=>{
    const {email,pass}=req.body;
    let exist=await Customer.findOne({email:email});
    if(exist){
        if(exist.pass===pass){
            alert("logged in successfully")
            let payload={
                user:{
                    id:exist.id
                }
            }
            jwt.sign(payload,'jwtsecret',{expiresIn:3600000},
            (err,token)=>{
                if(!err){
                    return res.json(token)
                }
            }) 
        }
        else{
            alert("wrong password")
        }
    }
    else{
        alert("user not exist")
    }
})
app.post("/dreg",async(req,res)=>{
    const {name,email,pass,vehicle}=req.body;
    const use=new Driver({
        name,email,pass,vehicle
    })
    let exist=await Driver.findOne({email:email});
    if(exist){
        alert("driver exist")
    }
    else{
       await  use.save();
        alert("driver registered")
    }
})
app.post("/dlogin",async(req,res)=>{
    const {email,pass}=req.body;
    let exist=await Driver.findOne({email:email});
    if(exist){
        if(exist.pass===pass){
            alert("logged in successfully")
            let payload={
                user:{
                    id:exist.id
                }
            }
            jwt.sign(payload,'jwtsecret',{expiresIn:3600000},
            (err,token)=>{
                if(!err){
                    return res.json(token)
                }
            }) 
        }
        else{
            alert("wrong password")
        }
    }
    else{
        alert("driver not exist")
    }
})
app.get("/cget",middleware,async(req,res)=>{
    let exist =await Customer.findById(req.user.id)
    if(exist){
        return res.json(exist)
    }
    else{
        return res.json("token not found")
    }
})
app.post("/pen",middleware,async(req,res)=>{
    const {from,to,veh}=req.body;
    const us=new Ride({
        from,to,veh,person:req.user.id
    })
    await us.save();
    return res.json(us)
})
app.get("/pen",middleware,async(req,res)=>{
    const exist=await Ride.find({person:req.user.id})
    return res.json(exist)
})
app.get("/dprofile",middleware,async(req,res)=>{
    const exist=await Driver.findById(req.user.id)
    return res.json(exist)
})
app.post("/ride",middleware,async(req,res)=>{
    const {vehicle}=req.body;
    const exist=await Ride.find({veh:vehicle}).populate("person")
    return res.json(exist)
})
app.post("/comp",middleware,async(req,res)=>{
    const {bookedid,from,to,bookedby,bookedon,completedon,veh,_id}=req.body;
    const us=new Completed({
        bookedid,from,to,completedon,bookedby,bookedon,driver:req.user.id,veh
    })
    await us.save();
    await Ride.findByIdAndDelete(_id)
    return res.json(us)
    
})
app.get("/comp",middleware,async(req,res)=>{
    const exist=await Completed.find({driver:req.user.id})
    return res.json(exist)
})
app.get("/completed",middleware,async(req,res)=>{
    const exist =await Completed.find({bookedid:req.user.id}).populate("driver")
    return res.json(exist)
})