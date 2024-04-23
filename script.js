if (localStorage.getItem('username')==null){
    localStorage.setItem('username','')
}
if (localStorage.getItem('password')==null){
    localStorage.setItem('password','')
}
var user=localStorage.getItem('username');
var pass=localStorage.getItem('password');
var users={}
var rawFile = new XMLHttpRequest();
rawFile.open("GET", "users.json", true);
rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4) {
        users = JSON.parse(rawFile.responseText);
        if (users[user]!=pass){
            window.location.href='login';
        }
    }
}
rawFile.send();