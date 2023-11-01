// // // const http = require('http'); 
// // // const fs = require('fs');
// // // http.createServer(function (req, res) { 
// // //    fs.readFile('temp.txt', function(err, data) { 
// // //       res.writeHead(200, {'Content-type': 'text/html'}); 
// // //      res.write("<h6>welcome</h6>");       
// // //      console.log(data.toString());  
// // //       return res.end(); 
// // //     }); 
// // //  }).listen(8080);

 
// // // //  console.log(l);

// // // //  setInterval(() => {
// // // //    var date=new Date();
// // // //     console.log(date.toLocaleTimeString())
// // // //  }, 1000);

// // // // function demo(){
// // // //     return "welcome";
// // // // }
// // // // demo();//calling

// // // // //producing code
// // // // let p = new Promise(function(resolve, reject) {
// // // //     // the function is executed automatically when the promise is constructed
  
// // // //     // after 1 second signal that the job is done with the result "done"
// // // //     var age=17;
// // // //     if(age>18)
// // // //         resolve("Eligble");
// // // //     else
// // // //         reject("Not Eligible");
// // // // });

// // // //   //consume
// // // //   p.then(
// // // //     result => console.log(result), // shows "done!" after 1 second
// // // //     error => console.log(error) // doesn't run
// // // //   );



// // // // async function f1(){
// // // //     var result=await getReadPDF();
// // // //     return result;// pdf data  20ms
// // // // }
// // // // // Task status- Pending, Completed, Failed
// // // // async function f2(){
// // // //     var result=await getReadDOC();
// // // //     return result;// doc data   15ms
// // // // }
// // // // async function f3(){
// // // //     var result=await getReadTXT();
// // // //     return result;// txt data    20ms
// // // // }
// // // // f1(); f2(); f3();



// // // const fs = require('fs');
 
// // // fs.readFileSync('temp.txt', 'utf8', (err, data) => {
// // //    debugger;
// // //    console.log(err);
// // //     console.log(data);
// // //     }
// // // );
 
// // // self-invoking function
// // //(() => { console.log("Hello From NodeJS") })();

// // const fs = require('fs');
 
// // async function readFileAsync() {
// //     const data = await fs.readFileSync('temp.txt', 'utf8');
// //     console.log(data);
// // }
 
// // readFileAsync();
// // (() => { console.log("Hello From NodeJS") })();

const axios = require('axios');
const fs = require('fs').promises;


axios.get('https://ghibliapi.herokuapp.com/films')
    .then((response) => {
        console.log('Successfully retrieved our list of movies');
        response.data.forEach(movie => {
            console.log(`${movie['title']}, ${movie['release_date']}`);
        });
    })