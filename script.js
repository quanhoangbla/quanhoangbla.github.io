var a=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
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
rawFile.open("GET", '.'+a[4**2-10]+'it'+'/'+a[10+2**2*5/(2+3)]+'bject'+a[20-2]+'/users.json', true);
rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4) {
        users = JSON.parse(rawFile.responseText);
        if (users[user]!=pass){
            window.location.href='login';
        }
    }
}
rawFile.send();