const prompt = require('prompt-sync')();
const username = prompt('What is your name');
console.log(`Your name is ${username}`);

require('dotenv').config()
const mongoose = require('mongoose')

//Make the DATABASE CONNECTION  
//Set up Mongoose and MongoDB Connection

const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI) //import from .env file
        console.log('Welcome to the CRM');
    await runQueries()
    await mongoose.disconnect()
        console.log('Disconnected from MongoDB')
    process.exit()
    }

//Create the runQueries function 




