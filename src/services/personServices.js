const Person = require("../models/person");

async function savePerson(body){
    const {name, email, address, phone} = body;
    if (!name || !email || !address || !phone){
        return 1;   // All fields are required
    }

    const existingPerson = await Person.findOne({email});
    if (existingPerson){
        return 2;   // Existing email
    }

    const newPerson = new Person({name, email, address, phone});
    await newPerson.save();
    
    return 3;   // Successfull
}

async function retrivePerson(query){
    const { limit = 10, name, email, address, phone } = query;

    const filter = {};
    if (name) filter.name = new RegExp(name, 'i'); // case-insensitive search
    if (email) filter.email = email;
    if (address) filter.address = new RegExp(address, 'i');
    if (phone) filter.phone = phone;

    const peopleData = Person.find(filter).limit(parseInt(limit));
    return peopleData;
}

module.exports = {savePerson, retrivePerson};