var btn=document.getElementById("btnSubmit");

btn.addEventListener('click',function () {
    var name = document.querySelector('#name').value;
    var email =document.querySelector('#email').value;
    var address=document.querySelector('#address').value;
    
    var d = new Date();
    var current = d.getHours() + ':'+ d.getMinutes();
    console.log(current);
    
    if(!/^[A-Za-z ]+$/.test(name)){
    alert("Molim Vas unesite ispravno ime!");
    return;
    }
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        alert("Molim Vas unesite ispravan email!");
        return;
    }
    if(address.length < 3){
    alert('Molim Vas unesite ispravnu adresu!')
    return;
    }
    alert(`Prihvatili smo vašu porudžbinu na ime ${name}, očekujte porudbinu na adresi ${address}, podatke o porudžbini smo poslali na email: ${email}\nVreme porudžbine ${current} `);
    
})

$("#name").focus(function(){
    $(this).css("background-color","black")
    $(this).css("color","white")
});
blur
$("#email").focus(function(){
    $(this).css("background-color","black")
    $(this).css("color","white")
});
$("#address").focus(function(){
    $(this).css("background-color","black")
    $(this).css("color","white")
});
$("#name").blur(function(){
    $(this).css("background-color","#ef7500")
    $(this).css("color","black")
});
$("#email").blur(function(){
    $(this).css("background-color","#ef7500")
    $(this).css("color","black")
});
$("#address").blur(function(){
    $(this).css("background-color","#ef7500")
    $(this).css("color","black")
});