const http=require('http')
const server=http.createServer((req,res)=>
{
    if(req.url==='/')
    {
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end("Welcome to my server")
    }
    else if(req.url==='/student')
    {
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify({name:'Nischit',
            age:20,
            semester:4,
            college:"Kec"
        }))
    }
    else if(req.url==='/skills')
    {
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify({skills:["Node.js", "Express", "MongoDB"]}))
    }
    else{
        res.writeHead(404)
        res.end("Page not found")

    }
})
server.listen(3000,()=>
{
    console.log("Server is running")
})