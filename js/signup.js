$(document).ready(function(){
    // local-a data-nin yazilmasi
    // let i = 0;
    if(localStorage.getItem("ID")==null){
        localStorage.setItem("ID", 0);
    }
    $("#signup").submit(function(e){
        e.preventDefault();
        let num = Number(localStorage.getItem("ID")) + 1;
        localStorage.setItem(`user${num}-name`, $("#name").val());
        localStorage.setItem(`user${num}-email`, $("#email").val());
        localStorage.setItem(`user${num}-password`, $("#password").val());
        localStorage.setItem("ID", num);
    });
});