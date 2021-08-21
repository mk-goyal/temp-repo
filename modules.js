const path = require('path');


console.log(path.sep);

const filepath = path.join('\D','webdev','javascript','modules.js');

console.log(filepath);

const base = path.basename(filepath)

console.log(base)

const absolute = path.resolve(__dirname,)

console.log(__dirname);

const { readFile, writeFile } = require('fs');

readFile('./first.txt','utf8',(err,result) => {
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./second.txt','utf8',(err,result) => {
        if(err){
            console.log(err);
            return
        }
        const second = result;
        writeFile('./result.txt','Hehe I am result', (err, result) => {
            if(err){
                console.log(err);
                return
            }
            console.log(result);
        })
        
    })
})

const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to homepage ser')
    }
    if(req.url === '/about'){
        res.end('This is about us.')
    }
    res.end(`
    <h1>Opps!<h1/>
    <p>We can't seem to find the page you are looking for!<p/>
    <a href='/'>Back Home<a/>
    `)
    
    
})

server.listen(5100)