main();

function main(){
    getAllArticles();
}


//----Implémentation de la fonction getAllArticles()----


function getAllArticles() {

//--- Récupérer les articles : Invocation de l'API 

    fetch("http://localhost:3000/api/products")
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            data.forEach(element => {
                let kanapLink = document.createElement("a");
                kanapLink.setAttribute("href","./products.html?id="+element._id);

                let kanapArticle = document.createElement("article");
                kanapLink.appendChild(kanapArticle);

                let kanapImg = document.createElement("img");
                kanapImg.setAttribute("src", element.imageUrl);
                kanapImg.setAttribute("alt",element.altTxt);
                kanapArticle.appendChild(kanapImg);
                
                let kanapName = document.createElement("h3");
                kanapName.classList.add("productName");
                kanapName.innerText = element.name;
                kanapArticle.appendChild(kanapName);

                let kanapDescription = document.createElement("p");
                kanapDescription.classList.add("productDescription");
                kanapDescription.innerText = element.description;
                kanapArticle.appendChild(kanapDescription);

                const Items = document.getElementById("items");
                items.appendChild(kanapLink);
            });

            

        //-- console.log(resultAPI)
        
        }).catch(function(error){

        });
    }
