const prompt = require('prompt-sync')();
//const username = prompt('What is your name');
//console.log(`Your name is ${username}`);

require('dotenv').config()
const mongoose = require('mongoose')

//**---------------------------------------------------------------------------------** 

//Make the DATABASE CONNECTION  
//Set up Mongoose and MongoDB Connection
const connect = async () => {
    try {
    await mongoose.connect(process.env.MONGODB_URI)             //import from .env file
        console.log('Connected to MOngoDB');
    } catch (error) {
        console.log(error)
    }

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
/*------------------------------ Query Functions --------------------------------------*/

//Create the runQueries function 
const runQueries = async () => {
    //console.log('Queries running')
}

//**---------------------------CREATING THE MAIN FUNCTION--------------------------------**
//Create the main function which will display a Welcome Message showing a message in the terminal
const main = async () => {
    console.log('Welcome to the CRM')
    menu()
}

//**---------------------------CREATING THE MENU FUNCTION--------------------------------**
//Create the Menu Function
const menu = async () => {
    let choice;
    do {                                   //do...while. Execute Once: The code inside the do block is executed at least once, regardless of whether the condition is true or false. Condition Check: After executing the block, the condition is checked. If it evaluates to true, the loop runs again; if false, the loop ends.
        console.log('What would you like to do?')
        console.log('1. Create a customer')
        console.log('2. View all customers')
        console.log('3. Update a customer')
        console.log('4. Delete a customer')
        console.log('5. quit')

//Adding the logic to the Menu function
const choice = prompt('Number of action to run: ')

    if (choice === '1') {
        await createCustomer();
    } else if (choice === '2') {
        await viewAllCustomers();
    } else if (choice === '3') {
        await updateCustomer();
    } else if (choice === '4') {
        await deleteCustomer();
    } else if (choice === '5') {
        console.log('Goodbye!')           //it has to be before disconnecting
        //await mongoose.connection.close();
        //process.exit();
        
    } else {
        console.log('Invalid choice, please try again.')
    }

} while (choice !== '5');                  // Loop continues until the user chooses to quit. Is used to keep the menu active and running until the user decides to quit the application by entering '5'.
    
}

//**---------------------------CREATING THE CREATE NEW CUSTOMER FUNCTION--------------------------------**

//The create() method adds new documents to our data base. Which is our object here with our schema data, and that will be mapped out with our schema.
const createCustomer = async () => {
    //console.log('Creating a customer')
    try {
        const clientName = prompt (`What's the customer's name?`)
        const clientAge = parseInt (prompt(`What's the customer's age?`))  //using parseInt to convert string to integer (it will only return whole numbers).
    
//Define the todoData object with properties
const todoData = {
    name: clientName,
    age: clientAge
}

//This is the operation performed on the database = action of creating a new document in the database using the Mongoose create() method.
//The result is logged to verify that the new client was successfully created.
const todo = await Todo.create(todoData)                                 //the first `todo` is just a variable. It's the document returned, and it's the newly created document based on our schema.
    console.log(`New Client: `, todo)                                    //the second `Todo` is the model itself that's interacting with the database. 

} catch (error) {
    console.log('Error: ', error)
}
}

//**------------------------------CREATING THE VIEW ALL CUSTOMERS FUNCTION-------------------------**

const viewAllCustomers = async () => {
    const todo = await Todo.find({})
    console.log('Viewing all customers: ', todo)
}

//**-----------------------------CREATING UPDATE CUSTOMER FUNCTION--------------------------------**
const updateCustomer = async () => {
    const id = prompt ('Enter the ID of the customer you want to update')
    const name = prompt ('Enter the new name of the customer')

    const updateCustomer = await Todo.findByIdAndUpdate(id,
        { name : name }, { new: true})
    console.log(`The customer data has been updated to: `, updateCustomer)
}

//**-----------------------------CREATING DELETE CUSTOMER FUNCTION--------------------------------**
const deleteCustomer = async () => {
    const idToDelete = prompt ('Enter the ID of the customer you want to delete')
    const removedCostumer = await Todo.findByIdAndDelete(idToDelete)
    console.log('Customer deleted: ', removedCostumer)
}

//**-----------------------------------------------------------------------------------------------**
//Import our model
const Todo = require('./models/todo.js')  //We need to give the path to the file.
