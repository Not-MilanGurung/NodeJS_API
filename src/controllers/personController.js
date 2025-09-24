const personServices = require("../services/personServices");

async function save(req, res) {
    try{
        const person = await personServices.savePerson(req.body);
        switch (person){
            case 1:
                return res.status(400).json({ success: false, message: "Fields can not be null"});
            case 2:
                return res.status(400).json({ success: false, message: "Email already registered" });
            case 3:
                return res.status(200).json({ success: true, message: "Person registered sucessfully" });
            default:
                return res.status(500).json({ success: false, message: "Internal Server Error"});
        }
    }
    catch(err){
        console.log(err);
        return res.status(500).json({ success: false, message: "Internal Server Error"});
    }
}

async function get(req, res) {
    try{
        const people = await personServices.retrivePerson(req.query);
        return res.json(people);
    }
    catch(err){
        console.log(err);
        return res.status(500).json({ success: false, message: "Internal Server Error"});
    }
}

module.exports = {save, get}