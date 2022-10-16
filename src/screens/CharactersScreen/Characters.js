import React, {useEffect, useState} from "react"
import api from "../../api/api"
import styles from './characters.module.css'
import { Link } from "react-router-dom";
import img from './logo.png'
import imgCards from './Haku.jpg'

export default function CharacterScreen(){

    const [personagens, setPersonagens] = useState([]);

    console.log(personagens.name)

    useEffect(() => {
        api.get('/people')
        .then((response) =>{
            setPersonagens(response.data)
        }).catch(error =>{
            console.log(error)
        })
    }, [])

    return(
        <div className={styles.divConteiner}>
            <div className={styles.divGotoGhibliSite}>
                <Link to={'/'}><img src={img} className={styles.imgStudio}/></Link>
            </div>
            <div>
                <h1 className={styles.h1}>Personagens</h1>
            </div>
            {personagens.map((personagens, key) => {
                function ImgAlt(){
                    if(personagens.name == 'Haku'){

                        return <img src={imgCards} className={styles.imgCharacters}/>;
                    }
                }
                return(
                    <div className={styles.conteinerCharacters}>
                        <ImgAlt/>
                        <p className={styles.textoCharacters}>Nome: {personagens.name}</p>
                    </div>
                )
            })}
        </div>
    )
}