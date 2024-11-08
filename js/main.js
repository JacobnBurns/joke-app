document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
  const url = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart`;

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data);

      // Hide the initial quote
      document.getElementById('initialQuote').style.display = 'none';

      // Display the joke setup and delivery
      document.getElementById('setupText').innerText = data.setup;
      document.getElementById('deliveryText').innerText = data.delivery;
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}
