//what is OOP
/*let baseSalary = 30_000;
let overTime = 10;
let rate = 20;

function getWage(baseSalary,overTime,rate) {
    console.log(baseSalary + (overTime*rate));
}
getWage(baseSalary,overTime,rate);

let employee = {
    baseSalary:30_000,
    overTime:10,
    rate: 20,
    getWage: function() {
        console.log(this.baseSalary + (this.overTime * this.rate));
    }
};
employee.getWage();

//OBJECTS
//simple way to define objects
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }

};
circle.draw();
//FACTORY FUNCTIONS
function creatCircle(radius) {
    return {
        radius,
        draw: function(){
            console.log('draw');
        }
    }
}
const circle = creatCircle(1);
//CONSTRUCTOR
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const another = new Circle(1);

// we use literals
let x = {};
//let x = new Object();
new String(); //'',"",``
new Boolean(); //true,false . we use true ,false instead new boolean.
*/

// const { rejects } = require("assert/strict");
// const { resolve } = require("path/posix");

// ***CLASSES***
/*CONTENT
1.HOW does class work in javascript?
2.fact: Javascript does not have classes
*/
// class Person {
//     constructor(height) {
//         this.height = height
//     }
// }
// let man = new Person()
// man

// const person = {
//     name: 'Nick'
//   };
//   person.name = 'John' // this will work ! person variable is not completely reassigned, but mutated
//   console.log(person.name) // "John"
//   //person = "Sandra" // raises an error, because reassignment is not allowed with const declared variables
  
/*console.log('start');

function loginUser(email, password, callback) {
    setTimeout(() => {
        callback ({userEmail : email});
    },5000 );
}

function getVideos(email, callback) {
    setTimeout(() => {
        callback(["v1","v2","v3"])
    }, 2000);
}

function videoDetails(video, callback) {
    setTimeout(() => {
        callback("This is title");
    }, 2000);
}

const user = loginUser("mkpoyal@male.com", 123456, (user) => {
    console.log(user);
    getVideos(user.userEmail, videos => {
        console.log(videos);
        videoDetails(videos[0], (title) => {
            console.log(title);
        })
    })
})

console.log('end'); */

/*const promise = new Promise((res, rej) =>{
    setTimeout(() => {
        rej(new Error('Login first ser'));
    }, 2000);
})

promise.then(user => { console.log(user); }).
catch(err => { console.log(err.message); })*/
/*
console.log('start');

function loginUser(email, password) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({userEmail : email});
        },2000 );
    })
}

function getVideos(email) {
    return new Promise((res, rej) => {
    setTimeout(() => {
        res([])
    }, 2000);
})
}

function videoDetails(video) {
    return new Promise((res, rej) => {
    setTimeout(() => {
        res("This is title");
    }, 2000);
})
}

async function displayUser() {
    try{
    const loggedUser = await loginUser("mk", 123456);
    const videos = await getVideos(loggedUser.userEmail);
    const details = await videoDetails(videos[0]);
    console.log(details);
    }
    catch(err){console.log("we couldn't get vids ser");}
}
displayUser();

console.log("finish");

loginUser("abc", 123)
.then(user => getVideos(user))
.then(videos => videoDetails(videos[0]))
.then(details => console.log(details))*/

/*const yt =  new Promise((res) => {
        setTimeout(() => {
            console.log("getting yt videos");
            res({videos : [1,2,3,4,5] });
        },2000 );
    })

const fb =  new Promise((res) => {
        setTimeout(() => {
            console.log("getting fb posts");
            res({post : "asdf" });
        },2000 );
    })

Promise.all([yt,fb]).then(result => {console.log(result);});*/