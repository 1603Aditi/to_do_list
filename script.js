    let resource = document.querySelector("#resources");
    let dropdown = document.querySelector("#dropdownmenu");
    let btn1=document.querySelector("#start");
    let btn2=document.querySelector("#start-free");
    let res=document.querySelector("#res");
    console.log(res);
    resource.addEventListener("click", function (event) {
        event.preventDefault(); 
        res.style.color="gray";
        if (dropdown.style.display === "none" || dropdown.style.display === "") {
            dropdown.style.display = "block";   
        } 
    });

    resource.addEventListener("mouseleave", function (event) {
        event.preventDefault(); 
        res.style.color= "rgb(36, 36, 35)";
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    });

    btn1.addEventListener("click",()=>{
        let next=document.createElement("a");
        next.href="login.html";
        document.body.appendChild(next);
        next.click();
    })
    btn2.addEventListener("click",()=>{
        let next=document.createElement("a");
        next.href="login.html";
        document.body.appendChild(next);
        next.click();
    })
