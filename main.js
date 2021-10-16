fetch("https://ghibliapi.herokuapp.com/films/")
    .then((response) => response.json())
    .then((result) => {
        const selection = document.querySelector("#titles");

        result.forEach((movie) => {
            const option = document.createElement("option");
            option.value = movie.title;
            option.textContent = movie.title;
            selection.append(option);
        })

        document.querySelector("#titles").addEventListener("change", (event) => {
            event.preventDefault();    
            const article = document.querySelector("#display-info article")  
            if (article) {
                article.remove();
            }
            result.filter((movie) => {
                if (event.target.value === movie.title) {
                    const article = document.createElement("article")

                    const title = document.createElement("h3");
                    title.textContent = movie.title;
                    article.append(title); 
                    
                    const year = document.createElement("p");
                    year.textContent = movie.release_date;
                    article.append(year);
    
                    const description = document.createElement("p");
                    description.textContent = movie.description ;
                    article.append(description);

                    document.querySelector("#display-info").append(article);
                }
            })
        })

        document.querySelector("#leave-review").addEventListener("submit", (event) => {
            event.preventDefault();

            const userInput= event.target.review.value

            const unorderedList = document.querySelector("ul");
            const listItem = document.createElement("li");
            unorderedList.append(listItem);

            const strong = document.createElement("strong")
            strong.textContent = document.querySelector("#titles").value;
            listItem.append(strong);

            const textNode = document.createTextNode(` ${userInput}`)
            strong.after(textNode);

            document.querySelector("#review").value = "" 
        })
    })
    .catch((error) => {
        console.log(error);
    })