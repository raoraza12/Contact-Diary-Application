const fullName = document.querySelector(".fullName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const registerBtn = document.querySelector(".register-button"); 

function registerUser() {
  const userData = {
        fullName : fullName.value,
    email : email.value,
    password : password.value
}
if (userData.fullName === "" || userData.email === "" || userData.password === "") {
  alert("Please fill all the fields");
  return;
}
  let users = JSON.parse(localStorage.getItem("userData")) || [] ;
  users.push(userData) 
  localStorage.setItem("userData", JSON.stringify(users))

  console.log("registered" , userData);
  window.location = "../index.html"
  
}