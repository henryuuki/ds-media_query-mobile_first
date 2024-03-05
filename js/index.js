function verificacao(){
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;

    if(user.trim() === "" || password.trim() === ""){
        alert("Preencha todos os campos");
    } else {
        if(user.trim() === "admin" || password.trim() === "admin"){
            window.location.href = ("./pages/pokemon.html")
        } else {
            alert("Usuario ou senha incorretos!");
        }
    }
}