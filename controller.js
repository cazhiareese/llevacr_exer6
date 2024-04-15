import mongoose from 'mongoose';


//connection string
await mongoose.connect( 'mongodb+srv://clleva:iqLhKIzfq1wqq3i6@cluster0.1e7kih9.mongodb.net/StudentDatabase', {  
 useNewUrlParser: true, useUnifiedTopology: true });

//Student model 
const Student = mongoose.model('students', {
  stdnum: Number,
  fname: String,
  lname: String,
  age: Number
}, 'studentData');

//save operation
const save = async (req,res) => {
    const flag = 
    {
        inserted : true
    }

    //create new instance of Student
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
} //end of save operation

//update operation
const update = async (req,res) => {

    const flag = 
    {
        updatedOne : true
    }
    
    try
    {
        //update lname using fname
        await Student.updateOne(
            { fname: req.body.fname },
            {$set: {lname: req.body.lname}}
        )

        flag.updatedOne = true;
    }catch (err)
    {
        console.log(err);
        flag.updatedOne = false;
    }
    res.send(flag)
} //end of update

//remove one student using student number
const remove = async (req,res) => {
    const flag = 
    {
        deletedOne : true
    }
    let data = await Student.findOne({ stdnum: req.body.stdnum });

    if (data != null){
        try{
            await Student.deleteOne(
                { stdnum: req.body.stdnum }
            )
            flag.deletedOne = true;
            
        }catch (err){
            console.log(err);
            flag.deletedOne = false;
        }
        res.send(flag)       
    }else{
        res.send("stdnum not found");
    }
    
} //end of remove one

//remove all users
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
} //end of remove all

//get one user using fname
const getUser = async (req,res) => {
    let data = await Student.find({ fname: req.query.fname});
    // let data = await Student.find({ fname: req.query.fname}, {fname:1, _id: 0});
    res.send(data);
} //end of get one

//get all users
const getAllUser = async (req,res) => {
    // let data = await Student.find({}, {fname:1, _id: 0});
    let data = await Student.find({});
    res.send(data);
} //end of get all

//export objects
export {save, update, remove, removeAll, getUser, getAllUser}