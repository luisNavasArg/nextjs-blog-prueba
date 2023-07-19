import {dbConnect} from "database/config/config"
import Users from "database/models/usuarios" 
dbConnect();
export default async function handler(req, res) {
  let {body,method} = req;
  console.log(method, req.url);
  switch (method) {
    case 'GET':
      try {
        let users = await Users.find({});
        console.log(users);
        return res.status(200).json({ data:users })
      } catch (error) {
        return res.status(500).json({error:error.message})
      }
      
    case 'POST':
      try {
        const newUser = new Users(body);
      const savedUsers = await newUser.save();
      return res.status(201).json(savedUsers)
      } catch (error) {
        return res.status(500).json({error:error.message})
      }
      
    case 'DELETE':
      res.status(200).json({ users:'delete' })
      
  
    default:
      return res.status(400).json({message:"this method is not support"})
    
  }
    
  }