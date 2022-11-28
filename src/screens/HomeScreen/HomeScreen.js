import styles from './homescreen.module.css';
import img2 from '../../assets/homescreen/teste.png';
import Header from '../../components/headerComponent/Header';

export default function Homescreen(){

    return(
        <div class="bg-gradient-to-br from-blue-500 to-green-400 w-full h-screen table">
            <Header/>
            <div>
            </div>
            <div className={styles.divConteinerChihiro}>
                <p className={styles.filmName}>A viagem de chihiro
                    <p className={styles.filmTxt}>
                        Chihiro e seus pais estão se mudando para uma cidade diferente. A caminho da nova casa, o pai decide pegar um atalho. Eles se deparam com uma mesa repleta de comida, embora ninguém esteja por perto. Chihiro sente o perigo, mas seus pais começam a comer. Quando anoitece, eles se transformam em porcos. Agora, apenas Chihiro pode salvá-los.
                    </p>
                </p>
                <a href='https://www.netflix.com/br/title/60023642' target={'_blank'} rel="noopener noreferrer">
                    <button className={styles.filmButton}>
                        Watch on Netflix
                    </button>
                </a>
            </div>
            <div>
                <img src={img2} className={styles.imgCenter}/>
            </div>
        </div>
    )
}