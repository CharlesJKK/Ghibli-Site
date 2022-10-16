import React, {useState} from 'react'
import api from '../../api/api'
import { useEffect } from 'react'
import styles from './Films.module.css'
import img from './Kemushi_no_Boro_pôster.png'
import img2 from './Meuamigototoro.png'
import img3 from './Ocasteloanimado.png'
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
            {films.map((films, key) => {
                return(

                     <div className={styles.divimg}>
                        <div className={styles.title}><h1>{films.title}</h1></div>
                            <img className={styles.img} src={films.image}/>
                                <div className={styles.containerdesc}>
                                <p/>{films.description}
                                </div>
                    </div>

                )
            })}
        </div>
    )
}