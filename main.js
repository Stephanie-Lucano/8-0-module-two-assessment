fetch("https://ghibliapi.herokuapp.com/films/")
    .then((response) => response.json())
    .then((result) => {
        const selection = document.querySelector("#movie-titles");

        result.forEach((movie) => {
            const option = document.createElement("option");
            option.value = movie.title;
            option.textContent = movie.title;
            selection.append(option);
        })
    })
    .catch((error) => {
        console.log(error);
    })