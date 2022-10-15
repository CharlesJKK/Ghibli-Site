import styles from './Films.module.css'
import img from './Kemushi_no_Boro_pôster.png'
import img2 from './Meuamigototoro.png'
import img3 from './Ocasteloanimado.png'
export default function Films(){
    
    return(
        <div className={styles.divfilms} >
            <h1>Estúdio Ghibli</h1>
            <p className={styles.ptex1}>Lista de filmes</p>
            
            <div className={styles.divbox}>

            <img className={styles.img} src={img}/>
            <h2>TESTE TESTE</h2>

            <img className={styles.img} src={img2}/>
            <h3 className={styles.h2}>TESTE TESTE</h3>

            <img className={styles.img} src={img3}/>
            <h4 >TESTE TESTE</h4>
            
            </div>
        </div>
    )
}