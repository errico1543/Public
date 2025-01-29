import mongoose from "mongoose";
// Modelo de usuário
//necessário definir tipo e se é obrigatório
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    
  },
  //data em que o usuário foi criado
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  Description: {
    type: String,
    required: true,
  },
  
});

export default mongoose.model('User', userSchema);
