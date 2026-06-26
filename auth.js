// Cek Login
if(localStorage.getItem("login") !== "true"){

    window.location.href="index.html";

}

// tampilkan nama
document.getElementById("namaUser").innerHTML =
localStorage.getItem("username");

function logout(){

    localStorage.removeItem("login");
    localStorage.removeItem("username");

    window.location.href="index.html";

}