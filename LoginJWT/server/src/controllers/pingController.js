import connection from "../models/db.js";



const ping = (req,res)=>{
    const consult = 'SELECT * FROM login';

    try {
        connection.query(consult, (err, results)=>{
            console.log(results);
            res.json(results)
        })
    } catch (e) {
        
    }
}

export default ping;