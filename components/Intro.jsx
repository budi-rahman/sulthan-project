import styles from "../styles/Intro.module.css"
import Image from "next/image"
import Circle from "./Circle"

const Intro = () => {
    return(
        <div className={styles.container}>
            <Circle backgroundColor="#C78FC9" top="-50vh" left="-50vh"/>
            <Circle backgroundColor="#9C539F" right="-40vh"/>
            <div className={styles.card}>
                <h1 className={styles.title}><span className={styles.brand}>Shultan Company</span><br/> Coffee Shop, Appparel Golf, <br/> Custom Production and Logistic</h1>
                <p className={styles.desc}>Be the professional store service provider with high quality design and well-known to the world</p>
                <button className={styles.button}>DISCOVER</button>
            </div>
            <div className={styles.card1}>
                <Image 
                src="/img/Gambar1.png"
                alt="" 
                width="400%" 
                height="400%" 
                layout="fixed" 
                objectFit="contain"
                />
            </div>
        </div>
    )
}

export default Intro