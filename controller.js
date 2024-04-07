import mongoose from 'mongoose';


// connection string for compass
await mongoose.connect( 'mongodb+srv://clleva:iqLhKIzfq1wqq3i6@cluster0.1e7kih9.mongodb.net/StudentDatabase', {  
 useNewUrlParser: true, useUnifiedTopology: true });


const Student = mongoose.model('students', {
  stdnum: Number,
  fname: String,
  lname: String,
  age: Number
}, 'studentData');


const save = async (req,res) => {
    const flag = 
    {
        inserted : true
    }

    const newStudent = new Student({
        stdnum: req.body.stdnum,
        fname: req.body.fname,
        lname: req.body.lname,
        age: req.body.age
    });
    
    try{
        await newStudent.save();
    }catch (err){
        console.log(err);
        flag.inserted = false;
    }
    res.send(flag);
}

const update = async (req,res) => {
    try
    {
        await Student.updateOne(
            { fname: req.body.fname },
            {$set: {lname: "Parker"}}
        )
    
        let data = await Student.findOne({lname: "Parker"});
        res.send(data);
    }catch (err)
    {
        console.log(err);
        res.send(err);
    }
      
}

const remove = async (req,res) => {
    const flag = 
    {
        deletedOne : true
    }
    try{
    await Student.deleteOne(
        { stdnum: req.body.stdnum }
    )
    }catch (err){
        console.log(err);
        flag.deletedOne = false;
    }
    res.send(flag);  
 
}

const removeAll = async(req,res) =>{
    const flag = 
    {
        deleted : true
    }

    try{
        let deleteMany = await Student.deleteMany({});    
        res.send({'status': flag, 'check': deleteMany});
    }catch(err){
        console.log(err);
        flag.deleted = false;
        res.send(flag);
    }
}

const getUser = async (req,res) => {
    let data = await Student.find({ fname: req.query.fname});
    // let data = await Student.find({ fname: req.query.fname}, {fname:1, _id: 0});
    res.send(data);
}

const getAllUser = async (req,res) => {
    // let data = await Student.find({}, {fname:1, _id: 0});
    let data = await Student.find({});
    res.send(data);
}


export {save, update, remove, removeAll, getUser, getAllUser}