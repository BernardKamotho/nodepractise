// import the express module
const Express = require('express');

const app = Express();

app.get('/', (req, res)=>{
    res.send("This is the Landing Page.")
});

// another route
app.get("/second", (req, res)=>{
    res.send("This is the second page.")
});

// thid route
app.get("/third", (req, res)=>{
    res.send("This is the third page/route accessed")
});

// asssignment: Create two additiona routes and try to access them on the browser

// specify onto which port the server is running
app.listen(3000, ()=>{
    console.log("Server already running");
})