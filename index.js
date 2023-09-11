import "style.css";

//logic to check is user login
if(localStorage.getItem('token')){
  document.getElementById("navlist").innerHTML = `<li id="logout"><a>Logout</a></li>`;
  document.getElementById("logout").addEventListener("click",()=>{
    localStorage.removeItem("token");
    window.location.reload();
  })
}

