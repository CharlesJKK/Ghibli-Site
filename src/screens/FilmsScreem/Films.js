import React, {useState} from 'react'
import api from '../../api/api'
import { useEffect } from 'react'
import styles from './Films.module.css'
import Header from '../../components/headerComponent/Header';
export default function Films(){
   
    const [films, setFilms] = useState([])
    console.log(films)
    useEffect(() => {
        api.get("/films")
        .then((response) => {
            setFilms(response.data)
        })
        .catch(() =>{
            console.log("Deu tudo errado")
        })

     }, [])
    
    return(
        
        
        <div class="bg-fundo table w-full bg-center bg-repeat" >
                <Header/>
                <div class="bg-gradient-to-r from-blue-900 to-green-700 w-3/6 m-auto rounded-lg">
                    <h1 class="text-center text-slate-100 font-GhibliNormal m-20 ">
                        Lista de filmes
                    </h1>
                </div>
                
            {films.map((films, key) => {
                                        return(
            <div>
            
            <div class= "inline-block w-1/2 mt-5 ml-25 ">
            <img class= " max-h-15 inline-block w-1/5 ml-40" src={films.image}/>
            <h1 class= "text-center text-slate-100 font-GhibliNormal m-20">{films.title}</h1>
            <p class= "flex text-slate-100 ">{films.description}  </p>                             
            </div>
            </div>
                                    
                )
            }
                )
                    }
        </div>
    )
}