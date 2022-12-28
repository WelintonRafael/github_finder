
import { UsersProps } from "../types/users";
import React from "react";
import Search from "../components/Search";
import {useState}from "react";
import User from '../components/Users'
import Error from "../components/Error";


const Home = () => {

    const [user, setUser]= useState<UsersProps | null>(null);
    const [error, setError] = useState(false);

    
    const loadUser =async (userName:string) => {

      setUser(null);
      setError(false);

        if(userName === ""){
          alert("Não Digitou o nome do usuaário , por favor digite para que seja feito a busca!!!")
          return;
        }
    
        const res  = await fetch( `https://api.github.com/users/${userName}`);
        const data  = await res.json();
      

        if(res.status === 404){
          setError(true);
         
          alert("Usuário que digito não esta cadastrado, digite um usuário válido.")
          

          return;
         

        }
       

        const {avatar_url, login, location, followers, following} = data
        const userData : UsersProps = {
        

            avatar_url,
             login,
             location,
             followers,
             following,
             


        }
      setUser(userData);


    }
    
    return(
        <div>
         <Search loadUser ={loadUser} />
         
         {user&& <User {...user} />}
         {error && <Error />}

      
        
                
            
         </div>
       
    )
    

};
export default Home;
