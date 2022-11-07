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

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=pink%20floyd", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

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
