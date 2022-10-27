import React, {useState} from 'react'
import api from '../../api/api'
import { useEffect } from 'react'
import styles from './Films.module.css'
import { Link } from 'react-router-dom'
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
        
        
        <div className={styles.divfilms} >
                <Header/>
                <div className={styles.divh1}>
                    <h1 className={ styles.h1}>
                        Lista de filmes
                    </h1>
                </div>
                
            {films.map((films, key) => {
                                        return(
            <div>
            
            <div className={styles.divimg}>
            <img className={styles.img} src={films.image}/>
            <h1 className={styles.h1}>{films.title}</h1>
            <p className={styles.p1}>{films.description}  </p>                             
            </div>
            </div>
                                    
                )
            }
                )
                    }
        </div>
    )
}