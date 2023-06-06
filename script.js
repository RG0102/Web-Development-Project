//Sudent Name: Ritika Gupta (C21368541)
//This is the Javascript files for my products, serviced and contact page.
//Button onclick function for products page
function myFunction_1()
{
    var inStock = true;

    if(inStock) 
    {
        alert("This item is in a stock.");
    }// end if

    else
    {
        alert("This item is not in the stock, Please try again later.");
    }// end else

}// end myFunction


//AmountofReviveactive counter subtract value
var amountofReviveactive = "0";

document.getElementById("counter1").innerHTML = amountofReviveactive;
function subtractvalue() {
    amountofReviveactive--;
    document.getElementById("counter1").innerHTML = amountofReviveactive;
    if (amountofReviveactive < 0) {
        alert("There are too few items! Please try again!");
        amountofReviveactive = 0;
        document.getElementById("counter1").innerHTML = amountofReviveactive;
    }//end if
}//end of amountofReviveactive

//AmountofReviveActive counter addvalue
function addvalue() {
    amountofReviveactive++;
    document.getElementById("counter1").innerHTML = amountofReviveactive;
    if (amountofReviveactive > 10) {
        alert("There are too many items! Please try again!");
        amountofReviveactive = 10;
        document.getElementById("counter1").innerHTML = amountofReviveactive;
    }

}

//Menoprime counter subtractvalue_2
var menoprime = 0;
document.getElementById("counter_2").innerHTML = menoprime;

function subtractvalue_2() {
    menoprime--;
    document.getElementById("counter_2").innerHTML = menoprime;
    if (menoprime < 0) {
        alert("There are too few items! Please try again!");
        menoprime = 0;
        document.getElementById("counter_2").innerHTML = menoprime;
    }
}

//Menoprime counter addvalue_2
function addvalue_2() {
    menoprime++;
    document.getElementById("counter_2").innerHTML = menoprime;
    if (menoprime > 10) {
        alert("There are too many items! Please try again!");
        menoprime = 10;
        document.getElementById("counter_2").innerHTML = menoprime;
    }
}

//Optibac counter subtractvalue_3
var optibac = 0;
document.getElementById("counter_3").innerHTML = optibac;

function subtractvalue_3() {
    optibac--;
    document.getElementById("counter_3").innerHTML = optibac;
    if (optibac < 0) {
        alert("There are too few items! Please try again!");
        optibac = 0;
        document.getElementById("counter_3").innerHTML = optibac;
    }
}

//Optibac counter addvalue_3
function addvalue_3() {
    optibac++;
    document.getElementById("counter_3").innerHTML = optibac;
    if (optibac > 10) {
        alert("There are too many items! Please try again!");
        optibac = 10;
        document.getElementById("counter_3").innerHTML = optibac;
    }
}

//Acetome subtractvalue_4;

var acetome = 0;
document.getElementById("counter_4").innerHTML = acetome;

function subtractvalue_4() 
{
     acetome--;
     document.getElementById("counter_4").innerHTML = acetome;
     if (acetome < 0) 
     {
        alert("There are too few items! Please try again!");
         acetome = 0;
         document.getElementById("counter_4").innerHTML = acetome;
     }
}

//Acetome addvalue_4;

function addvalue_4() {
    acetome++;
    document.getElementById("counter_4").innerHTML = acetome;
    if (acetome > 10) {
        alert("There are too many items! Please try again!");
        acetome = 10;
        document.getElementById("counter_4").innerHTML = acetome;
    }
}


//Strepsils counter subtractvalue_5
var strepsils = 0;
document.getElementById("counter_5").innerHTML = strepsils;

function subtractvalue_5() {
    strepsils--;
    document.getElementById("counter_5").innerHTML = strepsils;
    if (strepsils < 0) {
        alert("There are too few items! Please try again!");
        strepsils = 0;
        document.getElementById("counter_5").innerHTML = strepsils;
    }
}

//Strepsils counter addvalue_5
function addvalue_5() {
    strepsils++;
    document.getElementById("counter_5").innerHTML = strepsils;
    if (strepsils > 10) {
        alert("There are too many items! Please try again!");
        strepsils= 10;
        document.getElementById("counter_5").innerHTML = strepsils;
    }
}

//Volateran counter subtractvalue_6
var volateran = 0;
document.getElementById("counter_6").innerHTML = volateran;

function subtractvalue_6() {
    volateran--;
    document.getElementById("counter_6").innerHTML = volateran;
    if (volateran < 0) {
        alert("There are too few items! Please try again!");
        volateran = 0;
        document.getElementById("counter_6").innerHTML = volateran;
    }// end if
}// end else

//Volateran counter addvalue_6 
function addvalue_6() {
    volateran++;
    document.getElementById("counter_6").innerHTML = volateran;
    if (volateran > 10) {
        alert("There are too many items! Please try again!");
        volateran = 10;
        document.getElementById("counter_6").innerHTML = volateran;
    }// end if
}// end else

//Volateran2 counter subtractvalue_7
var volateran2 = 0;
document.getElementById("counter_7").innerHTML = volateran2;

function subtractvalue_7() {
    volateran2--;
    document.getElementById("counter_7").innerHTML = volateran2;
    if (volateran2 < 0) {
        alert("There are too few items! Please try again!");
        volateran2 = 0;
        document.getElementById("counter_7").innerHTML = volateran2;
    }// end if
}// end else

//Volateran counter addvalue_7
function addvalue_7() {
    volateran2++;
    document.getElementById("counter_7").innerHTML = volateran2;
    if (volateran2 > 10) {
        alert("There are too many items! Please try again!");
        volateran2 = 10;
        document.getElementById("counter_7").innerHTML = volateran2;
    }// end if
}// end else


//Alflorex counter subtractvalue_8
var alflorex = 0;
document.getElementById("counter_8").innerHTML = alflorex;

function subtractvalue_8() {
    alflorex--;
    document.getElementById("counter_8").innerHTML = alflorex;
    if (alflorex < 0) {
        alert("There are too few items! Please try again!");
        alflorex = 0;
        document.getElementById("counter_8").innerHTML = alflorex;
    }// end if
}// end else

//Alflorex counter addvalue_8
function addvalue_8() {
    alflorex++;
    document.getElementById("counter_8").innerHTML = alflorex;
    if (alflorex > 10) {
        alert("There are too many items! Please try again!");
        alflorex = 10;
        document.getElementById("counter_8").innerHTML = alflorex;
    }// end if
}// end else


var viagra = 0;
document.getElementById("counter_9").innerHTML = viagra;

function subtractvalue_9() 
{
    viagra--;
    document.getElementById("counter_9").innerHTML = viagra;
    if (viagra < 0) {
        alert("There are too few items! Please try again!");
        viagra = 0;
        document.getElementById("counter_9").innerHTML = viagra;
    }// end if
}// end else


function addvalue_9() {
    viagra++;
    document.getElementById("counter_9").innerHTML = viagra;
    if (viagra > 10) {
        alert("There are too many items! Please try again!");
        viagra = 10;
        document.getElementById("counter_9").innerHTML = viagra;
    }// end if
}//end else


//Progess Bar move functions
function move() {
    var element  = document.getElementById("myBar");
    var width = 20;
    var id = setInterval(frame, 10);
    function frame() 
    {
        if(width >= 100) 
        {
            clearInterval(id);
        }// end if

        else
        {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }// end inner else

    }// end function frame

}// end function move()


//Drop down button for services.
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");

}// end myFunction()

//Drop down button for services
//Close the dropdown if the user clicks outside of it.
window.onclick = function(event) {
    if(!event.target.matches('dropbtn')) 
    {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;

        for(i = 0; i < dropdowns.length; i++)
        {
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show'))
            {
                openDropdown.classList.remove('show');
            }// end inner if

        }// end inner for

    }// end inner if

}// end windows onclick()

//The link for the contact page
function myFunction() {
    window.location.href = "http://localhost/WebDportal/contact_us.html";
}




