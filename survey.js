const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {};

const askQuestion = (question) => {
  return new Promise(resolve => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const createProfile = async () => {
  profile.name = await askQuestion("What's your name? Nicknames are also acceptable :) ");
  profile.activity = await askQuestion("What's an activity you like doing? ");
  profile.music = await askQuestion("What do you listen to while doing that? ");
  profile.favouriteMeal = await askQuestion("Which meal is your favourite (e.g., dinner, brunch, etc.)? ");
  profile.favouriteFood = await askQuestion("What's your favourite thing to eat for that meal? ");
  profile.favouriteSport = await askQuestion("Which sport is your absolute favourite? ");
  profile.superpower = await askQuestion("What is your superpower? In a few words, tell us what you are amazing at! ");

  console.log(`Profile:\n${profile.name} loves ${profile.activity} while listening to ${profile.music}. Their favorite meal is ${profile.favouriteMeal}, especially when it includes ${profile.favouriteFood}. An avid fan of ${profile.favouriteSport}, they believe their superpower is ${profile.superpower}.`);

  rl.close();
};

createProfile();
