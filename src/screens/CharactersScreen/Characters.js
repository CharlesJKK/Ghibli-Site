import React, {useEffect, useState} from "react";
import api from "../../api/api";
import styles from './characters.module.css';
import { Link } from "react-router-dom";
import img from './logo.png';
import imgHaku from './Haku.jpg';
import imgPazu from './Pazu.jpg';
import imgLusheeta from './Lusheeta.jpg';
import imgDola from './Dola.jpg';
import imgMuska from './Muska.jpg';
import imgUncle from './Uncle.jpg';
import imgMouro from './Muoro.webp';
import imgDuffi from './Duffi.webp';
import imgLouis from './Charlies.webp';
import imgCharles from './Charles.png';
import imgHenri from './Henri.png';
import imgMotro from './Motro.png';
import imgOkami from './Okami.png';
import imgAshitaka from './Ashitaka.png';
import imgSan from './San.png';
import imgEboshi from './Eboshi.png';
import imgJigo from './Jigo.png';
import imgKohroku from './Kohroku.png';
import imgGonza from './Gonza.png';
import imgHiisama from './HiiSama.png';
import imgYakul from './Yakul.png';
import imgShishigami from './Shishigami.png';
import imgMoro from './Moro.png';
import imgJiji from './Jiji.png';
import imgSatsuki from './Satsuki.png';



export default function CharacterScreen(){

    const [personagens, setPersonagens] = useState([]);

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

                function Age(){
                    if(personagens.age === 'Unspecified/Elderly' || personagens.age === 'Really Old' || personagens.age === 'Elder' || personagens.age === 'Over 50'){
                        return 'Idoso';

                    }else if(personagens.age === 'Unspecified/Adult' || personagens.age === 'Adult'){
                        return 'Adulto';

                    }else if(personagens.age === 'NA' || personagens.age === 'Unknow'){
                        return 'Desconhecido';

                    }else if(personagens.age.length == '2' || personagens.age.length == '3' || personagens.age.length == '1'){
                        return personagens.age;

                    }else if(personagens.age === ''){
                        return 'Desconhecido';

                    }else if(personagens.age === 'late teens'){
                        return 'Adolescente';

                    }else if(personagens.age === 'Middle age'){
                        return 'Meia idade';

                    }
                }

                function Gender(){
                    if(personagens.gender === 'Male'){
                        
                        return 'Masculino';

                    }else{

                        return 'Feminino';
                    }

                }

                function ImgAlt(){
                    if(personagens.name === 'Haku'){
                        return <img src={imgHaku} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Pazu'){
                        return <img src={imgPazu} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Lusheeta Toel Ul Laputa'){
                        return <img src={imgLusheeta} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Captain Dola'){
                        return <img src={imgDola} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Romska Palo Ul Laputa'){
                        return <img src={imgMuska} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Uncle Pom'){
                        return <img src={imgUncle} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'General Mouro'){
                        return <img src={imgMouro} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Duffi'){
                        return <img src={imgDuffi} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Louis'){
                        return <img src={imgLouis} className={styles.imgCharacters}/>;

                    }
                    else if(personagens.name === 'Charles'){ 
                        return <img src={imgCharles} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Henri'){ 
                        return <img src={imgHenri} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Motro'){ 
                        return <img src={imgMotro} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Okami'){ 
                        return <img src={imgOkami} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Ashitaka'){ 
                        return <img src={imgAshitaka} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'San'){ 
                        return <img src={imgSan} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Eboshi'){ 
                        return <img src={imgEboshi} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Jigo'){ 
                        return <img src={imgJigo} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Kohroku'){ 
                        return <img src={imgKohroku} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Gonza'){ 
                        return <img src={imgGonza} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Hii-sama'){ 
                        return <img src={imgHiisama} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Yakul'){ 
                        return <img src={imgYakul} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Shishigami'){ 
                        return <img src={imgShishigami} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Moro'){ 
                        return <img src={imgMoro} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Jiji'){ 
                        return <img src={imgJiji} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Satsuki Kusakabe'){ 
                        return <img src={imgSatsuki} className={styles.imgCharacters}/>;

                    }
                    
                }
                return(
                    <div className={styles.conteinerCharacters}>
                        <ImgAlt/>
                        <p className={styles.textoCharacters}>Nome: {personagens.name}</p>
                        <p className={styles.textoCharacters}>Gênero: <Gender/></p>
                        <p className={styles.textoCharacters}>Idade: <Age/></p>
                    </div>
                )
            })}
        </div>
    )
}