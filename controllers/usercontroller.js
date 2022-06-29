import User from "../model/User.js";

const Signup = async (request, response)=>{
    const {nome, email, password} = request.body;
    const user = new User({
      name : nome,
      email: email,
      password: password
    })

    try{
      await user.save();

    }catch(e){
      console.log(`usuario nao salvo na base de dados`)
    }


    return response.status(201).json(user)

}

export {
  Signup
}