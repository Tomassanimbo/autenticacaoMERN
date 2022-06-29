import uau from "../model/User.js";

const signup = async (request, response)=>{
    const {nome, email, password} = request.body;
    const user = new aua({
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
  signup
}