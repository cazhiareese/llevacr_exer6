import mongoose from 'mongoose';


// connection string for compass
await mongoose.connect( 'mongodb+srv://clleva:iqLhKIzfq1wqq3i6@cluster0.1e7kih9.mongodb.net/ICS', {  
 useNewUrlParser: true, useUnifiedTopology: true });

// sample connection string for atlas
// mongodb+srv://<dbusername>:<password>@cluster0.dftckjy.mongodb.net/ICS
const Student = mongoose.model('students', {
  stdnum: Number,
  fname: String,
  lname: String,
  age: Number
});

let data = await Student.find({});
console.log(data);
