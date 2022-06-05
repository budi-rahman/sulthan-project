import styles from "../styles/Footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.cardL}>
                <h1 className={styles.title}>SULTHAN CONCEPT</h1>
                <h1 className={styles.linkTitle}>
                    <a href='/contact' passHref>
                        <span className={styles.linkText}>WORK WITH US</span>
                        <Image src="/img/link.png" alt="" height="40px" width="40px"/>
                    </a>
                </h1>
            </div>
            <div className={styles.cardS}>
                <div className={styles.cardItem}>
                    Kemang Jakrta <br/> DKI Jakarta
                </div>
                <div className={styles.cardItem}>
                    sulthan.concept@mail.com <br/> 021 - 198987
                </div>
            </div>
            <div className={styles.cardS}>
                <div className={styles.cardItem}>
                    FOLLOW US:
                    <br/> __FB__IN__BE__TW
                </div>
                <div className={styles.cardItem}>
                    2022 SULTHAN CONCEPT,
                    <br/>
                    ALL RIGHTS RESERVED
                </div>
            </div>
        </div>
    );
}

export default Footer