const readline = require('readline');
const data = require('./data.js')


const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const menu = `
Your options are:

1. Add a todo.
2. Remove a todo.
3. Remove all completed todos.
4. Toggle a todo's completion status.
5. Toggle a todo's priority.
6. Quit.

`;


const handleMenu = cmd => {
  switch(cmd){
    case '1':
      interface.question("What should go on your todo list? ", add);
      break;

    case '2':
      console.log("This feature is under construction, check back later!");
      interface.question(menu, handleMenu);
      break;

    case '3':
      console.log("This feature is under construction, check back later!");
      interface.question(menu, handleMenu);
      break;

    case '4':
      console.log("This feature is under construction, check back later!");
      interface.question(menu, handleMenu);
      break;

    case '5':
      console.log("This feature is under construction, check back later!");
      interface.question(menu, handleMenu);
      break;

    case '6':
      console.log('Quitting!')
      interface.close();
      // interface.question(menu, handleMenu);
      break;
  }
};

const add = adding => {
  console.log('* ' + adding);
  for(const toDo of data.todos){
    console.log('* ' + toDo.text);
  }
  data.todos.push({text: adding}, {inComplete: false}, {priority: 2})
  interface.question(menu, handleMenu)
}

console.clear();

for(const toDo of data.todos){
  console.log('* ' + toDo.text);
}

interface.question(menu, handleMenu);
