const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.end('<h1>Your Website is working Ash!!</h1>');
})
server.listen(port,()=>{
    console.log(`listing at ${port}`)
})