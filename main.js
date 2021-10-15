fetch("https://ghibliapi.herokuapp.com/films/")
    .then((response) => response.json())
    .then((result) => {
        const selection = document.querySelector("#movie-titles");

        return result.forEach((movie) => {
            const option = document.createElement("option");
            option.textContent = movie.title;
            selection.append(option);
        })
    })
    .catch((error) => {
        console.log(error);
    })