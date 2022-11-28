import img from '../../assets/homescreen/logo.png';
import styles from './header.module.css';
import { Link } from "react-router-dom"

export default function Header(){
    return(
        <>
            <div className={styles.botoesConteiner}>
                <Link to={'/'}><button className={styles.button}>Home</button></Link>
                <Link to={'/About'}><button type='button' className={styles.button}>Sobre</button></Link>
                <Link to={'/Films'}><button type='button' className={styles.button}>Filmes</button></Link> 
                <Link to={'/Characters'}><button type='button' className={styles.button}>Personagens</button></Link>  
            </div>
            <div className={styles.divGotoGhibliSite}>
                <Link to={'/'}>
                    <img src={img} className={styles.imgStudio}/>
                </Link>
            </div>
        </>
    )
}