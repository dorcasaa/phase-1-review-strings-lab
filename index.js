// index.js

// Define currentUser variable
const currentUser = 'Grace Hopper';

// Define welcomeMessage variable
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Define excitedWelcomeMessage variable
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Define shortGreeting variable
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

module.exports = {
  currentUser,
  welcomeMessage,
  excitedWelcomeMessage,
  shortGreeting
};
