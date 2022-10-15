import styles from './homescreen.module.css'
import img from './teste.png'

export default function Homescreen(){




    return(
        <div className={styles.divConteiner}>
            <div className={styles.botoesConteiner}>
                <button type='button' className={styles.button}>Home</button>
                <button type='button' className={styles.button}>Sobre</button>
                <button type='button' className={styles.button}>Filmes</button>
                <button type='button' className={styles.button}>Personagens</button>
            </div>
            <div className={styles.divGotoGhibliSite}>
                <a href='https://www.ghibli.jp' target={'_blank'} rel="noopener noreferrer">
                    <img src={img} className={styles.imgStudio}/>
                </a>
            </div>
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
        </div>
    )
}