function login(){

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "admin" && password === "nf19$45"){

        localStorage.setItem("login","true");
        localStorage.setItem("username",username);

        window.location.href="dashboard.html";

    }else{

        document.getElementById("pesan").innerHTML="Username atau Password salah";

    }

}