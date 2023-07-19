import { Schema, model,models } from 'mongoose';
const Users = new Schema ({ 
    user:{
        type: String,
        required:true,
        trim:true
    },
    name:{
        type: String,
        trim:true
    },
    last:{
        type: String,
        trim:true
    },
    email:{
        type: String,
        trim:true
    },
    pass:{
        type: String,
        required:true,
        trim:true
    },
    img:{
        type: String,
        required:true,
        trim:true
    }
});
export default  models.Users || model('Users',Users)