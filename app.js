const email = document.querySelector(".email");
const password = document.querySelector(".password");
const loginBtn = document.querySelector(".login-button");

function loginUser() {
  const storedData = localStorage.getItem("userData");
  if (!storedData) {
    alert("No user data found");
    return;
  }
  const users = JSON.parse(storedData);
  const curUser = users.find(
    user => user.email === email.value && user.password === password.value
  );
  if (!curUser) {
    alert("Invalid email or password");
    return;
  }
  console.log("Login successful:", curUser);
  localStorage.setItem("currentUser", curUser.email);
  window.location = "./Dashboard/dashboard.html";
}