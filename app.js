//fetch API1

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5e6e51759amsh305495c83d4fe53p1b7feejsn4ca608b4a497",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

const divRow = document.querySelector(".row");
const container = document.querySelector(".container");
container.innerHTML = `<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>`;
const containerFluid = document.querySelector("container-fluid");

const fetch1 = fetch(
  "https://deezerdevs-deezer.p.rapidapi.com/search?q=pink%20floyd",
  options
)
  .then((response) => response.json())
  .then((listOfItems) => {
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

//fetch 2
function secondFetch() {
  fetch(
    "https://deezerdevs-deezer.p.rapidapi.com/search?q=daft%20punk",
    options
  )
    .then((response) => response.json())

    .then((results) => {
      results.data.forEach((elem) => {
        container.innerHTML += `<div class="card-deck col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-3 c" >
  <img src=${elem.album.cover} class="card-img-top card" alt="...">
                                  <div class="card-body mt-4">
                                    <h5 class="card-title">${elem.album.title}</h5>
                                  </div>
                                </div>`;
      });
    })
    .then((unique) => {
      unique.data.filter((elem) => {
        elem;
      });
    })
    .catch((err) => console.error(err));
}
secondFetch();
thirdFetch();
//fetch 3
function thirdFetch() {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", options)
    .then((response) => response.json())

    .then((results) => {
      results.data.forEach((elem) => {
        container.innerHTML += `<div class="card-deck col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-3 c" >
  <img src=${elem.album.cover} class="card-img-top card" alt="...">
                                  <div class="card-body mt-4">
                                    <h5 class="card-title">${elem.album.title}</h5>
                                  </div>
                                </div>`;
      });
    })
    .catch((err) => console.error(err));
}
