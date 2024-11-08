😂 Random Joke Generator
A fun and easy-to-use web app that serves up random jokes to brighten your day! This app fetches jokes from the JokeAPI and delivers them at the click of a button. Built with HTML, CSS, and JavaScript, this app is designed to make you laugh with minimal effort!

🎉 Features
Random Jokes: Get a new joke with each click.
Two-Part Jokes: Displays both the setup and punchline for extra laughs.
Clean Design: Simple and responsive layout for an enjoyable experience.
Safe for Work: Filters out inappropriate jokes for all audiences.
🛠️ Technologies Used
HTML: For the structure and layout.
CSS: To style the app with a fun, clean design.
JavaScript: Fetches jokes from the API and handles the app's functionality.
JokeAPI: JokeAPI is a public API that provides a variety of jokes, with customizable filters.
📋 How It Works
Open the app in your browser.
Click the "Get a Joke" button to fetch a new random joke.
Enjoy the joke (and repeat as necessary for more laughs)!
🚀 Getting Started
To run this project locally:

Clone the repository:
bash
Copy code
git clone https://github.com/JacobnBurns/joke-app.git
Open index.html in your browser to start the app.
📜 Code Snippet
Here’s a sample of the JavaScript that fetches a new joke from JokeAPI:

javascript
Copy code
document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
  const url = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      document.querySelector('#setupText').innerText = data.setup;
      document.querySelector('#deliveryText').innerText = data.delivery;
    })
    .catch(err => console.error(`Error fetching joke: ${err}`));
}
📦 Dependencies
No additional dependencies are required. Just HTML, CSS, and JavaScript!

🙌 Acknowledgments
JokeAPI for providing the joke data.
📝 License
This project is open-source and available for modification. Feel free to make it your own!