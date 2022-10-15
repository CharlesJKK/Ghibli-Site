import styles from './Films.module.css'
import img from './Kemushi_no_Boro_pôster.png'
import img2 from './Meuamigototoro.png'
import img3 from './Ocasteloanimado.png'
export default function Films(){
    
    return(
        <div className={styles.divfilms} >
            <h1 className={styles.h1}>Estúdio Ghibli</h1>
            <p className={styles.ptex1}>Lista de filmes</p>
            
            <div className={styles.divbox}>

            <div className={styles.divimg}>
            <img className={styles.img} src={img}/>
            <p className={styles.p}>Detalhes</p>
            </div>

            <div className={styles.divimg}>
            <img className={styles.img} src={img2}/>
            <p className={styles.p}>Detalhes</p>
            </div>

            <div className={styles.divimg}>
            <img className={styles.img} src={img3}/>
            <p className={styles.p}>Detalhes</p>
            </div>
            </div>
        </div>
    )
}