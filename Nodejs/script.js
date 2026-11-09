// let n = 5;

// for(let i=0; i<n; i++){
//     console.log("hello, ",i);
// }

// console.log("bye!");
// console.log(process.argv)




// let args = process.argv;

// for(let i=2; i<args.length; i++){
//     console.log("hello to ",args[i])
// }



// const someValue = require("./math");

// console.log(someValue);


// const math = require("./math");

// console.log(math.PI);



// const info = require("./fruits");

// console.log(info);


// const figlet = require("figlet");

// figlet("Hello Vivek!", function (err, data) {
//     if (err) {
//         console.log("Something went wrong");
//         console.dir(err);
//         return;
//     }

//     console.log(data);
// });



import { sum, PI} from "./math.js";

import { generate } from "random-words";

console.log(generate());