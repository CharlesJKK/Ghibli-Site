import React, {useState} from 'react'
import api from '../../api/api'
import { useEffect } from 'react'
import styles from './Films.module.css'
import { Link } from 'react-router-dom'
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
                <div className={styles.divbuttom}>
                <Link to={'/'}><button type='button' className={styles.button}>Home</button></Link>
                <button type='button' className={styles.button}>Sobre</button>
                <button type='button' className={styles.button}>Filmes</button>
                <button type='button' className={styles.button}>Personagens</button>
                </div>
                <div className={styles.divh1}>
                    <h1 className={ styles.h1}>
                        Lista de filmes
                    </h1>
                </div>
            {films.map((films, key) => {
                                        return(
                    
                                   
                     <div className={styles.divimg}>
        
                            <div className={styles.h1}><title>Lista de filmes</title></div>
                            <img className={styles.img} src={films.image}/>
                            <p/>{films.description}                               
                                </div>
                                    
                )
            }
                )
                    }
        </div>
    )
}