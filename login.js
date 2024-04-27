function login(){
    var user=document.getElementById("username").value;
    var pass=document.getElementById("pwd").value;
    var users={}
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", 'users.json', true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            users = JSON.parse(rawFile.responseText);
            sessionStorage.clear()
            sessionStorage.setItem('username',user);
            sessionStorage.setItem('password',pass);            
            if (users[user]==pass){
                alert("Login Succesful!");
                window.location.href='https://quanvippro.site/';
            }else{
                alert("Login Failed, Please try again.");
            }
        }
    }
    rawFile.send();
}