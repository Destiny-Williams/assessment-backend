const express = require("express");
const cors = require("cors");

const app = express();
let buttonCount = 0;


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

//get and post

app.post("/api/name", (req, res) => {

  const { Name } = req.body;

  res.status(200).send(`Hello ${Name}, you sure are lucky!`);
});

app.post("/api/number", (req, res) => {

  const { Number } = req.body;

  res.status(200).send(`Your LUCKY NUMBER is ${Number * Number}`);
});

app.get("/api/counter", (req, res) => {
  buttonCount += 1;


   res.status(200).send(`You now have ${buttonCount} times, good luck!`);
  
});


//  
// 
// make sure to have 5 fortunes
app.get("/api/fortunes", (req, res) => {
  const fortunes = ["Change is happening in your life, so go with the flow!",
					 "Don’t be discouraged, because every wrong attempt discarded is another step forward",
					 "Don’t let your limitations overshadow your talents.","Go for the gold today! You’ll be the champion of whatever.","If you wish to see the best in others, show the best of yourself.","It is honorable to stand up for what is right, however unpopular it seems.",
  ];

  // choose random fortunes
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortunes = fortunes[randomIndex];

  res.status(200).send(randomFortunes);

});

/// bottom of the code:

  app.listen(4000, () => console.log("Server running on 4000"));