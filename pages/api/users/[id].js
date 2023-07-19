import {dbConnect} from "database/config/config"
import Users from "database/models/usuarios" 
dbConnect();
export default async function handler(req, res) {
    let {method,query:{id},body} = req;
    
    switch (method) {
        case "GET":
            let user = await Users.findOne({_id:id})
            if(!user) return res.status(404).json({msg:"No existe usuario con ese id"})
            return res.status(200).json({user});
            case "POST":
                try {
                    let userUpdate = await Users.findByIdAndUpdate(id,body,{new:true});
                    if(!userUpdate) return res.status(404).json({msg:"User not found"})
                    res.status(201).json({userUpdate});
                } catch (error) {
                    return res.status(400).json({error:error.message})
                }
            case "DELETE":
                console.log(id);
            try {
                let deleteOne = await Users.findByIdAndDelete({_id:id})
                if(!deleteOne) return res.status(404).json({msg:"user not found"})
                return res.status(204).json();
            } catch (error) {
                return res.status(400).json({error:error.message})
            }
        default:
            return res.status(400).json({message:"this method is not support"})
    }
    
    
}