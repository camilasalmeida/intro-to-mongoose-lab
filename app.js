const prompt = require('prompt-sync')();
//const username = prompt('What is your name');
//console.log(`Your name is ${username}`);

require('dotenv').config()
const mongoose = require('mongoose')

//**------------------------------------------------------------------------** 

//Make the DATABASE CONNECTION  
//Set up Mongoose and MongoDB Connection
const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI) //import from .env file
        //console.log('Connected to MOngoDB');
    await runQueries()
    await main()
    //await createCustomer()
    //await viewAllCustomers()
    //await updateCustomer()
    //await deleteCustomer()

    await mongoose.disconnect()
        //console.log('Disconnected from MongoDB')
    process.exit()
    }


connect()
/*------------------------------ Query Functions -----------------------------*/

//Create the runQueries function 
const runQueries = async () => {
    //console.log('Queries running')
}

//Create the main function which will display a Welcome Message showing a message in the terminal
const main = async () => {
    console.log('Welcome to the CRM')
    menu()
}

//Create the Menu Function
const menu = async () => {
    console.log('What would you like to do?')
    console.log('1. Create a customer')
    console.log('2. View all customers')
    console.log('3. Update a customer')
    console.log('4. Delete a customer')
    console.log('5. quit')
}

//**------------------------CREATING THE MENU FUNCTIONS--------------------**

const createCustomer = async () => {
    console.log('Creating a customer')
}


const viewAllCustomers = async () => {
    console.log('Viewing all customers')
}

const updateCustomer = async () => {
    console.log('Updating a customer')
}

const deleteCustomer = async () => {
    console.log('Deleting a customer')
}


//Import our model
const Todo = require('./models/todo.js')  //We need to give the path to the file.
