
window.notHomepageCheck = function() {
    var check = false;
        if(document.location.pathname === "/"){
            check=true;
        }
    return check;
}

let toggleNavStatus = false;

let toggleNav = function(x) {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarLi = document.querySelector(".nav-sidebar ul li a");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a"); /* All because it grabs all the instances of anchor tags
                                                                            and puts them inside an array */
    let getBodyGrids = document.querySelector("#body-js");
    let getBodyGrids1 = document.querySelector(".content-cast");
    let getLanguages = document.querySelector(".nav-sidebar .languages");

    if (toggleNavStatus === false) { /*menu chiuso --> si apre*/
        getSidebarUl.style.visibility = "visible";
        getLanguages.style.visibility = "visible";
        if (window.matchMedia("(max-width: 425px)").matches) {
            /* the viewport is at least 400 pixels wide */
            getSidebar.style.width = "200px";
            getSidebarUl.style.padding = "15px";
          } else {
            /* the viewport is less than 400 pixels wide */
            getSidebar.style.width = "250px";
          }
        getSidebarTitle.style.opacity = "0.5";
        getBodyGrids.style.opacity = "0.5";



        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) { /*menu aperto --> si chiude */
        getSidebar.style.width = "0";
        getSidebarTitle.style.opacity = "0";
        getBodyGrids.style.opacity = "1";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }

        getSidebarUl.style.visibility = "hidden";
        getLanguages.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}

function myFunction(x) {
    if (x.matches) {
        getSidebar.style.width = "100px";
    } else {
        getSidebar.style.width = "250px";
    }
}

var x = window.matchMedia("(max-width: 425px)")
myFunction(x)
x.addEventListener(myFunction)
