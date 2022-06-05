import styles from "../styles/Navbar.module.css"
import Link from "next/link"

const Navbar = () =>{
    return(
        <div className={styles.container}>
            <Link href="/">SULTHAN</Link>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href="/products/coffee">COFFEE SHOP</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/apparel_golf">APPAREL GOLF</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/custom_product">CUSTOM PRODUCT</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/logistic">LOGISTIC</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/contact">CONTACT</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar