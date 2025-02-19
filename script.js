
    let resource = document.querySelector("#resources");
    let dropdown = document.querySelector("#dropdownmenu");

    resource.addEventListener("click", function (event) {
        event.preventDefault(); 

        if (dropdown.style.display === "none" || dropdown.style.display === "") {
            dropdown.style.display = "block";
        } 
    });

    resource.addEventListener("mouseleave", function (event) {
        event.preventDefault(); 

        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    });
