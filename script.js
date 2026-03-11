const registerForm = document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit", async function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const role = document.getElementById("role").value;

const response = await fetch("http://localhost:3000/register",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({name,email,password,role})

});

const data = await response.json();

alert(data.message);

});

}


const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit", async function(e){

e.preventDefault();

const email = document.getElementById("loginEmail").value;
const password = document.getElementById("loginPassword").value;

const response = await fetch("http://localhost:3000/login",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({email,password})

});

const data = await response.json();

alert(data.message);

});

}