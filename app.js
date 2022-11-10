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
const containerFluid = document.querySelector("container-fluid");

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=pink%20floyd", options)
  .then((response) => response.json())
  // .then((response) => console.log(response))
  .then((listOfItems) => {
    console.log(container);
    container.innerHTML = "";

    for (i of listOfItems.data) {
      container.innerHTML += `<div class="card-deck col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-3 c" >
    <img src=${i.album.cover} class="card-img-top card" alt="...">
                                    <div class="card-body mt-4">
                                      <h5 class="card-title">${i.album.title}</h5>                               
                                    </div>
                                  </div>`;
    }
  })
  .catch(
    () =>
      (container.innerHTML = `<div class="alert alert-danger">Something went wrong in getting items!</div>`)
  );
// container.innerHTML = `<img src=${listOfItems[1].album.cover} alt="jumbotron">`;
//   .catch((err) => console.error(err));

//fetch 2
fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=daft%20punk", options)
  .then((response) => response.json())
  .then((response) => console.log(response));
for (let i = 0; i < response.length; i++) {
  containerFluid += `<div class=card-deck col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2>
  <img src=$()`;
}
// .catch((err) => console.error(err));
//fetch 3
fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
//
