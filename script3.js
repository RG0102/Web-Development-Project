//Sudent Name: Ritika Gupta (C21368541)
//This is the javascript file for my index.html, searchbar, loginpage.html and signpage.html

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) 
{
    showSlides(slideIndex += n);
}

function currentslide(n) 
{
    showSlides(slideIndex = n);
}

function showSlides(n) 
{
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length)
    {
        slideIndex = 1
    }// end inner if

    if(n < 1)
    {
        slideIndex = slides.length;
    }// end inner if

    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }// end inner for

    //Dots length

    for(i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace("active", "");
    }// end inner for

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";

}

let items = [
    {name: "Revive Active", description: "Cost: £10", link: "products.html"},
    {name: "Menoprime",     description: "Cost: £15", link: "products.html"},
    {name: "Optibac", description: "Cost: £10", link: "products.html"},
    {name: "Acetom", description: "Cost: £10", link: "products.html"},
    {name: "Strepsils", description: "Cost: £12.50", link: "products.html"},
    {name: "Volateran", description: "Cost: £8", link: "products.html"},
    {name: "Volateran", description: "Cost: £10", link: "products.html"},
    {name: "Alforex", description: "Cost: £12", link:"products.html"},
    {name: "Viagra", description: "Cost: £8", link: "products.html"},
];

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");

function filterItems(searchTerm) {
     return items.filter(function (item) {
         return (
            item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || 
            item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1

         );
     });

}

function displayResults(searchResults) {
    let searchResultsDiv = document.getElementById("search-result");

    if(searchResults.length === 0) {
        searchResultsDiv.innerHMTL = "<p>No results found</p>";
        return;
    }

    searchResultsDiv.innerHTML = "";
    searchResults.forEach(function (item) {
        let resultItem = document.createElement("div");
        resultItem.classList.add("result-item");
        let resultItemName = document.createElement("h3");
        resultItemName.textContent = item.name;
        let resultItemDescription = document.createElement("p");
        resultItem.appendChild(resultItemName);
        resultItem.appendChild(resultUItemDescription);


        resultItem.addEventListener("click", function() {
            window.location.href = "product.html";
        });

        searchResultsDiv.appendChild(resultItem);

    });
}

searchButton.addEventListener("click", function() {
    
});
//Function display search results
function displayResults() {
    searchResults.innerHTML = "";
    const filteredProducts = products.filter(
        (product) => 
           product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           product.description.toLowerCase().includes(SearchTerm.toLowerCase())
    );

    
    if(filteredProducts.length === 0) {
        searchResults.innerHTML = "<li>No results found.</li>";
    }

    else {
        filteredProducts.forEach((product) => {
            const li = document.createElement("li");
            li.textContent = '${product.name} - ${product.description}';
            searchResults.appendChild(li);
    });
    }
}

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim();

    if(searchTerm !== "") {
        displaySearchResults(searchTerm);
    }
});

searchInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== "") {
            displaySearchResults(searchTerm);
        }
    }
});


//This is the link for my login_page.html

function loginPage() {
    window.location.href = "http://localhost/WebDportal/login_page.html";
}

//This is the link for my signup.html
function signupPage() {
    window.location.href = "http://localhost/WebDportal/signup.html";
}
