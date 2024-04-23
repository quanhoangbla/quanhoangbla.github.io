if (localStorage.getItem('username')){
    var user=localStorage.getItem('username');
    var pass=localStorage.getItem('password');
    var users={}
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "users.json", true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            users = JSON.parse(rawFile.responseText);
            if (users[user]!=pass){
                window.location.href='login.html';
            }
        }
    }
    rawFile.send();
}else{
    window.location.href='login.html';
}