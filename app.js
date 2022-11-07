//fetch API1

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5e6e51759amsh305495c83d4fe53p1b7feejsn4ca608b4a497",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

// fetch("https://deezerdevs-deezer.p.rapidapi.com/infos", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
const divRow = document.querySelector(".row");
const container = document.querySelector(".container");
container.innerHTML = `<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>`;

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=pink%20floyd", options)
  .then((response) => response.json())
  //   .then((response) => console.log(response));
  .then((listOfItems) => {
    console.log(container);
    container.innerHTML = "";

    for (i of listOfItems.data) {
      container.innerHTML += `<div class="card col-12 col-sm-6 col-lg-4 col-xl-3 my-3" >
                                    <img src=${i.album.cover} class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title">${i.album.title}</h5>                               
                                    </div>
                                  </div>`;
    }
  })
  .catch(
    () =>
      (container.innerHTML = `<div class="alert alert-danger">Something went wrong in getting items!</div>`)
  );
//   .catch((err) => console.error(err));

//fetch 2
fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=daft%20punk", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
//fetch 3
fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
//
