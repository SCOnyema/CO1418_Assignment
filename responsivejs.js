function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "active") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}