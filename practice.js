/* 

1 - Values, data types and operations 
In the code below, I utilized readline-sync to prompt the user for their name, what they would like to name their task buddy and what task they would like to enter or interact with. 

2 - Stringing characters together 
I utilized unicode, the escape sequence (\n), and template literals to make the text logged dynamic and interactive with what the user had input. 

3 - Control structures and logic 
I used boolean conditionals "if else" to help determine what actions the computer would need to execute next. 

4 - Building arrays
User tasks were stored in arrays 

5 - Using arrays
I used .push and .splice to add/remove tasks from the list

6 - Working with loops 
I used a while loop to keep the main menu running until the user quit. I did this because initially without the loop the program would close and users would be unable to add new tasks, or modify their current ones. I used for loops to iterate through my tasks array, showing each one to the user. 


/* INITIAL SET UP
- DISPLAY WELCOME MESSAGE 
- DISPLAY: "Please enter your name:"
- INPUT user's name

- DISPLAY: "What shall we name your buddy?"
- INPUT buddy's name

*/

const readline = require('readline-sync');

let userName = readline.question("Please enter your name: ");
console.log(`Welcome ${userName}!`);

console.log()
let buddyName = readline.question("Choose a name for your buddy: ");
console.log(`${buddyName} looks happy to meet you. Let's begin.`);


//task list (array)
let tasks = []; 
let running = true; 

while (running) { 
//current tasks
console.log("\nYour current tasks:");
if (tasks.length ===0) {
    console.log("No tasks yet. Add one!");
} else {
for (let i=0; i<tasks.length;i++) {
  const symbol = tasks[i].done ? "\u2713": "\u274C";
    console.log(`${i}: ${symbol} ${tasks[i].description}`);
    }
}

// MENU 
console.log("\nWhat would you like to do next? \n 1. Add new task \n 2.Remove task \n 3.Complete a task \n 4.Quit");

let choice = readline.question("Choose an option: ");

//OPTION 1 ADD TASK (.push)

/* NEW TASK

- ASK user for task
- STORE task
- ADD task to array
- DISPLAY list of tasks

*/

if (choice ==="1"){
let userTask = readline.question("\nAdd a new task "); 

let taskObject = {
    description: userTask, 
    done: false
};
 
tasks.push(taskObject);
console.log ("Task added! "); 

} 

/* OPTION 2 REMOVE TASK (splice)

- DISPLAY LIST OF TASKS (console.log) 
- ASK user which task they want to delete (readline) 
- REMOVE task from array (splice) 

*/ 

else if (choice ==="2") {
if (tasks.length === 0) {
 console.log("No tasks to remove.");
} else { 
    console.log("Which task do you want to remove?");
for (let i=0; i<tasks.length;i++) {
     const symbol = tasks[i].done ? "\u2713" : "\u274C";
    console.log(`${i}: ${symbol} ${tasks[i].description}`);
}

const i = readline.questionInt("Enter which task: ");

if (i >= 0 && i <tasks.length) { 
    tasks.splice(i,1);
    console.log("Task removed!");
} else {
    console.log("Invalid. Try again.");
}

} 
}

/* OPTION 3 - COMPLETING A TASK 

- USER completes a task
- USER earns XP 

*/ 

else if (choice==="3") {
   if (tasks.length === 0) {
 console.log("Add a task first!");
} else {
    console.log("\nWhich task do you want to complete?");
   for (let i=0; i<tasks.length;i++) {
     const symbol = tasks[i].done ? "\u2713" : "\u274C";
    console.log(`${i}: ${symbol} ${tasks[i].description}`);
}

const i = readline.questionInt("Enter which task: ");

if (i >= 0 && i <tasks.length) { 
    tasks[i].done=true; //task is marked as true 
    console.log ("Well done. You gained XP!") 
} else {
    console.log("Invalid. Try again.");
}
}
}

// OPTION 4 - QUIT PROGRAM

else if (choice === "4") {
        console.log("See you soon!");
        running = false;   }
    
else {
    console.log("Invalid option.");
    }
}

