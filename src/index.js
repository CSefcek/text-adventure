const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(prompt) {
  return new Promise(resolve => {
    rl.question(prompt, resolve);
  });
}

async function main() {
  console.log('Welcome to Text Adventure Game!');
  
  const name = await ask('Enter your name: ');
  console.log(`Welcome ${name}...`);
  
  // Add your logic here
  const answer = await ask('Do you want to start the adventure? (yes/no) ');
  // se l'utente risponde "yes", continua l'avventura, altrimenti termina
  // scriverlo
  if (answer.toLowerCase() === 'yes') {
    console.log('Starting the adventure...');
    // Continua l'avventura qui
  } 
  else {
    console.log('Goodbye!');
  }
  
  rl.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});