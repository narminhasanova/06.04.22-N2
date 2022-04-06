$(document).ready(function () {
    let usersArray = [{
        name: "Resul Aliyev",
        email: "resul@mail.ru",
        password: "resul1"
    }, {
        name: "Yehya Seydiyarov",
        email: "yehya@mail.ru",
        password: "yehya2"
    }];
    $("#login").submit(function (e) {
        e.preventDefault();
        let mail = $("#email").val();
        let pass = $("#password").val();
        // massivde axtarish
        let cvb = false;
        for (let i = 0; i < usersArray.length; i++) {
            if (mail == usersArray[i].email) {
                cvb = true;
                if (pass == usersArray[i].password) {
                    window.location.assign("success.html");
                } else{
                    alert("kod sehvdir");
                }
            }
        }
        // local-da axtarish
        if (cvb == false) {
            for (let i = 1; i <= Number(localStorage.getItem("ID")); i++){
                if (mail == localStorage.getItem(`user${i}-email`)) {
                    cvb = true;
                    if (pass == localStorage.getItem(`user${i}-password`)) {
                        window.location.assign("success.html");
                    }
                }
            }
        }
        if(cvb == false){
            alert("bele istifadeci yoxdur");
        }
    });
});