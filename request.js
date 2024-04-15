import needle from 'needle';

//post request for save
needle.post('http://localhost:3000/save-student',
    {
    stdnum: 19970000,
    fname: "Jo",
    lname: "Seph",
    age: 20
    },
    (err, res) => {
    console.log(res.body);  
});

//post request for update
needle.post('http://localhost:3000/update',
    {
        fname: "Mary Jane",
        lname: "Parker"
    }, 
    (err,res) => 
    {
        console.log(res.body)
});

//post request for delete
needle.post('http://localhost:3000/remove-user',
    {
        stdnum: 123456789
    }, 
    (err,res) => 
    {
        console.log(res.body)
});

//post request for remove all user
needle.post('http://localhost:3000/remove-all-user',{}, 
    (err,res) => 
    {
        console.log(res.body)
});

//get request for user using url query
needle.get('http://localhost:3000/user?fname=Koy', (err, res) => {
    console.log(res.body);   
});

//get request for all users
needle.get('http://localhost:3000/members', (err, res) => {
    console.log(res.body);   
});