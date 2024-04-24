var a=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
function login(){
    var user=document.getElementById("username").value;
    var pass=document.getElementById("pwd").value;
    var users={}
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", '.'+a[4**2-10]+'it'+'/'+a[10+2**2*5/(2+3)]+'bject'+a[20-2]+'/dep.json', true);
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