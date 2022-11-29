import React, {useEffect, useState} from "react";
import api from "../../api/api";
import styles from './characters.module.css';
import Header from "../../components/headerComponent/Header";
import imgHaku from '../../assets/characters/Haku.png';
import imgPazu from '../../assets/characters/Pazu.jpg';
import imgLusheeta from '../../assets/characters/Lusheeta.png';
import imgDola from '../../assets/characters/Dola.png';
import imgMuska from '../../assets/characters/Muska.png';
import imgUncle from '../../assets/characters/Uncle.png';
import imgMouro from '../../assets/characters/Muoro.png';
import imgDuffi from '../../assets/characters/Duffi.png';
import imgLouis from '../../assets/characters/Charlies.png';
import imgCharles from '../../assets/characters/Charles.png';
import imgHenri from '../../assets/characters/Henri.png';
import imgMotro from '../../assets/characters/Motro.png';
import imgOkami from '../../assets/characters/Okami.png';
import imgAshitaka from '../../assets/characters/Ashitaka.png';
import imgSan from '../../assets/characters/San.png';
import imgEboshi from '../../assets/characters/Eboshi.png';
import imgJigo from '../../assets/characters/Jigo.png';
import imgKohroku from '../../assets/characters/Kohroku.png';
import imgGonza from '../../assets/characters/Gonza.png';
import imgHiisama from '../../assets/characters/HiiSama.png';
import imgYakul from '../../assets/characters/Yakul.png';
import imgShishigami from '../../assets/characters/Shishigami.png';
import imgMoro from '../../assets/characters/Moro.png';
import imgJiji from '../../assets/characters/Jiji.png';
import imgSatsuki from '../../assets/characters/Satsuki.png';
import imgMei from '../../assets/characters/Mei.png';
import imgTatsuo from '../../assets/characters/Tatsuo.png';
import imgYasuko from '../../assets/characters/Yasuko.png';
import imgGranny from '../../assets/characters/Granny.png';
import imgKanta from '../../assets/characters/Kanta.png';
import imgTotoro from '../../assets/characters/Totoro.png';
import imgChuTotoro from '../../assets/characters/ChuTotoro.png';
import imgChibiTotoro from '../../assets/characters/ChibiTotoro.png';
import imgCatBus from '../../assets/characters/CatBus.png';
import imgNiya from '../../assets/characters/Niya.png';
import imgMuta from '../../assets/characters/Muta.png';
import imgCatKing from '../../assets/characters/CatKing.png';
import imgYuki from '../../assets/characters/Yuki.png';
import imgHaru from '../../assets/characters/Haru.png';
import imgBHumbert from '../../assets/characters/BHumbert.png';
import imgNatori from '../../assets/characters/Natori.png';
import imgColonelMuska from '../../assets/characters/ColonelMuska.png';
import imgPorcoRosso from '../../assets/characters/PorcoRosso.png';
import imgSosuke from '../../assets/characters/Sosuke.png';
import imgKiki from '../../assets/characters/Kiki.png';
import imgLaputianRobot from '../../assets/characters/LaputianRobot.png';
import imgChihiroOgino from '../../assets/characters/ChihiroOgino.png';
import imgOsono from '../../assets/characters/Osono.png';
import imgUrsula from '../../assets/characters/Ursula.png';
import imgTombo from '../../assets/characters/Tombo.png';
import imgMadame from '../../assets/characters/Madame.png';
import imgEarwing from '../../assets/characters/Earwing.png';
import imgBellaYaga from '../../assets/characters/BellaYaga.png';
import imgMandrake from '../../assets/characters/Mandrake.png';
import imgScarletRose from '../../assets/characters/ScarletRose.png';
import imgThomas from '../../assets/characters/Thomas.png';
import imgCustard from '../../assets/characters/Custard.png';

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
            <Header/>
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

                    }else if(personagens.name === 'Mei Kusakabe'){ 
                        return <img src={imgMei} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Mei Kusakabe'){ 
                        return <img src={imgMei} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Tatsuo Kusakabe'){ 
                        return <img src={imgTatsuo} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Yasuko Kusakabe'){ 
                        return <img src={imgYasuko} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Granny'){ 
                        return <img src={imgGranny} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Kanta Ōgaki'){ 
                        return <img src={imgKanta} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Totoro'){ 
                        return <img src={imgTotoro} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Chu Totoro'){ 
                        return <img src={imgChuTotoro} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Chibi Totoro'){ 
                        return <img src={imgChibiTotoro} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Catbus'){ 
                        return <img src={imgCatBus} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Niya'){ 
                        return <img src={imgNiya} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Renaldo Moon aka Moon aka Muta'){ 
                        return <img src={imgMuta} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Cat King'){ 
                        return <img src={imgCatKing} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Yuki'){ 
                        return <img src={imgYuki} className={styles.imgCharacters}/>;
                        
                    }else if(personagens.name === 'Haru'){ 
                        return <img src={imgHaru} className={styles.imgCharacters}/>;
                        
                    }else if(personagens.name === 'Baron Humbert von Gikkingen'){ 
                        return <img src={imgBHumbert} className={styles.imgCharacters}/>;
                        
                    }else if(personagens.name === 'Natori'){ 
                        return <img src={imgNatori} className={styles.imgCharacters}/>;
                        
                    }else if(personagens.name === 'Colonel Muska'){ 
                        return <img src={imgColonelMuska} className={styles.imgCharacters}/>;
                        
                    }else if(personagens.name === 'Porco Rosso'){ 
                        return <img src={imgPorcoRosso} className={styles.imgCharacters}/>;
                        
                    }else if(personagens.name === 'Sosuke'){ 
                        return <img src={imgSosuke} className={styles.imgCharacters}/>;
                        
                    }else if(personagens.name === 'Kiki'){ 
                        return <img src={imgKiki} className={styles.imgCharacters}/>;
                        
                    }else if(personagens.name === 'Laputian Robot'){ 
                        return <img src={imgLaputianRobot} className={styles.imgCharacters}/>;
                        
                    }else if(personagens.name === 'Chihiro Ogino'){ 
                        return <img src={imgChihiroOgino} className={styles.imgCharacters}/>;
                        
                    }else if(personagens.name === 'Osono'){ 
                        return <img src={imgOsono} className={styles.imgCharacters}/>;
                        
                    }else if(personagens.name === 'Ursula'){ 
                        return <img src={imgUrsula} className={styles.imgCharacters}/>;
                        
                    }else if(personagens.name === 'Tombo'){ 
                        return <img src={imgTombo} className={styles.imgCharacters}/>;
                        
                    }else if(personagens.name === 'Madame'){ 
                        return <img src={imgMadame} className={styles.imgCharacters}/>;
                        
                    }else if(personagens.name === 'Earwig'){ 
                        return <img src={imgEarwing} className={styles.imgCharacters}/>;
                        
                    }else if(personagens.name === 'Bella Yaga'){ 
                        return <img src={imgBellaYaga} className={styles.imgCharacters}/>;
                        
                    }else if(personagens.name === 'Mandrake'){ 
                        return <img src={imgMandrake} className={styles.imgCharacters}/>;
                        
                    }else if(personagens.name === 'Scarlet Rose'){ 
                        return <img src={imgScarletRose} className={styles.imgCharacters}/>;
                        
                    }else if(personagens.name === 'Thomas'){ 
                        return <img src={imgThomas} className={styles.imgCharacters}/>;

                    }else if(personagens.name === 'Custard'){ 
                        return <img src={imgCustard} className={styles.imgCharacters}/>;

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