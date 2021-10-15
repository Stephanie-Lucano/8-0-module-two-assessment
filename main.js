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

        document.querySelector("#dropdown").addEventListener("change", (event) => {
            const selection = event.target.value
            event.preventDefault();
            result.filter((movie) => {
                if (event.target.value === movie.title) {
                    const title = document.createElement("h3");
                    title.textContent = movie.title;
                    document.querySelector("#display-info").append(title); 
                    
                    const year = document.createElement("p");
                    year.textContent = movie.release_date;
                    document.querySelector("#display-info").append(year);
    
                    const description = document.createElement("p");
                    description.textContent = movie.description ;
                    document.querySelector("#display-info").append(description);
                }
            })

            document.querySelector("#leave-review").addEventListener("submit", (event) => {
                event.preventDefault();
                const userInput= event.target.review.value
    
                const unorderedList = document.querySelector("ul");
                const listItem = document.createElement("li");
                unorderedList.append(listItem);

                const strong = document.createElement("strong")
                strong.textContent = `${selection}:`;
                listItem.append(strong);

                const textNode = document.createTextNode(` ${userInput}`)
                strong.after(textNode);
            })
        })
    })
    .catch((error) => {
        console.log(error);
    })
