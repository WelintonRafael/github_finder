
import { UsersProps } from "../types/users";
import React from "react";
import Search from "../components/Search";
import {useState}from "react";


const Home = () => {

    const [user, setUser]= useState<UsersProps | null>(null);
    const loadUser =async (userName:string) => {

      /*  alert(userName);
        alert( `https://api.github.com/users/${userName}`);*/
        const res  = await fetch( `https://api.github.com/users/${userName}`);
        const data  = await res.json();

        const {avatar_url, login, location, fallowers, fallowing} = data
        const userData : UsersProps = {
        

            avatar_url,
             login,
             location,
             fallowers,
             fallowing,


        }
      setUser(userData);


    }
    
    return(
        <div>
         <Search loadUser ={loadUser} />
         
         {user&&<p>{user.login}</p>}
                
            
         </div>
        
    )
    

};
export default Home;
