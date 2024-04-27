if (sessionStorage.getItem('username')==null){
    sessionStorage.setItem('username','')
}
if (sessionStorage.getItem('password')==null){
    sessionStorage.setItem('password','')
}
var user=sessionStorage.getItem('username');
var pass=sessionStorage.getItem('password');
var users={}
var rawFile = new XMLHttpRequest();
rawFile.open("GET", 'users.json', true);
rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4) {
        users = JSON.parse(rawFile.responseText);
        if (users[user]!=pass){
            window.location.href='login';
        }
    }
}
rawFile.send();