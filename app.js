const email = document.querySelector(".email");
const password = document.querySelector(".password");
const loginBtn = document.querySelector(".login-button");

function loginUser() {
  const storedData = localStorage.getItem("userData");
  if (storedData) {
    const users = JSON.parse(storedData);
    const curUser = users.find(
      user => user.email === email.value && user.password === password.value
    );
      console.log("Login successful:", curUser); 
      localStorage.setItem("currentUser", curUser.email);
  } else {
    console.log("No user data found");
  }
  window.location = "./Dashboard/dashboard.html";
}