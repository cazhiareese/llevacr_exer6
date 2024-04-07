import needle from 'needle';

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

needle.post('http://localhost:3000/update',
    {
        fname: "Mary Jane"
    }, 
    (err,res) => 
    {
        console.log(res.body)
});

needle.post('http://localhost:3000/remove-user',
    {
        stdnum: 123456789
    }, 
    (err,res) => 
    {
        console.log(res.body)
});

needle.post('http://localhost:3000/remove-all-user',{}, 
    (err,res) => 
    {
        console.log(res.body)
});

needle.get('http://localhost:3000/user?fname=Koy', (err, res) => {
    console.log(res.body);   
});

needle.get('http://localhost:3000/members', (err, res) => {
    console.log(res.body);   
});