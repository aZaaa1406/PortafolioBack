import connection from "../models/db.js";
import jwt from "jsonwebtoken"

const login = (req, res)=>{
    const {user, password} = req.body

    //validaciones
    const consult = "Select * from login where usuario = ? and password = ?"

    try {
        connection.query(consult, [user, password], (err, result)=>{
            if(err){
                console.log(err);
                res.send(err);
            }

            if(result.length>0){
                const token = jwt.sign({user}, "Garfield", {
                    expiresIn: '2m'
                })
                res.send({token})
            }else{
                console.log("wrong user");
                res.send({message: "wrong user"})
            }
        })
    } catch (error) {
        
    }
}

export default login;
