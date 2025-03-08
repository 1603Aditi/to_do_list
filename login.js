let name1="Aditi";
let password=1234;

let inp=document.querySelectorAll("input");

let btn=document.querySelector(".login-btn");

btn.addEventListener("click", function (event){
    event.preventDefault();
    if(inp[0].value==name1 && inp[1].value==password){
        console.log("user permitted");
        let next=document.createElement("a");
        next.href="main.html";
        document.body.appendChild(next);
        next.click();
    }
    else
    console.log("wrong user");
})
