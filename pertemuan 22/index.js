// console.log("JavaScript DOM");

// const person = ["john",24,"programmer",true];

/*const person = {
    name: "john",
    age: 24,
    job: "programmer",
    isMarried: true,
    sayHello: function (){
        console.log("Hello World");
    },
};

person.age = 25;
person["address"] = "Manado";

console.log(person.name);
console.log(Person["age"]);
console.log(person);

delete person.address;
console.log(person);

person.sayHello();*/

//JavaScript HTML DOM

let title = document.getElementsByTagName("h1") [0].innerText;
console.log(title);

 title = document.getElementById("header2").innerText;
console.log(title);

let umur = document.getElementById("umur"). Value;
console.log(umur);

//DOM EVENT

function helloWorld() {
    let value = document.getElementById("umur").value;
    //console log.(value);
    //alert(value);
   document.getElementsByTagName("p") [1].innerText=value;
   document.querySelector(".header").style.color = "red";
   document.querySelector(".header").style.fontSize ="3em";
   document.querySelector(".header").style.backgroundColor ="yellow";

   let span = document.getElementsByTagName("span")[0];
   span.style.color="green";
   span.style.fontSize="1em"
}