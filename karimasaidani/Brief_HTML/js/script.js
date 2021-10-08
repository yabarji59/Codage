$(document).ready(function() {
    $('header').load('header.html');
    $('footer').load('footer.html')});

  

    function UserAction() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
             if (this.readyState == 4 && this.status == 200) {
                 alert(this.responseText);
             }
        };

        xhttp.open("GET", "ajax_info.txt", false);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();
        document.getElementById("demo").innerHTML = xhttp.responseText;
    }
    