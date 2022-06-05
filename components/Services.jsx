import styles from "../styles/Service.module.css"
import Link from 'next/link'
import Image from "next/image"

const Services = ({services}) => {
    return(
        <div className={styles.container}>
            <div className={styles.title}>What We Can Do?</div>
            <div className={styles.title}>Services we can help you with</div>
            <div className={styles.services}>
                {services.map((service) => (
                    <Link passhref key={service.id} href={`/product/${service.name}`}>
                        <div className={styles.service}>
                            <div className={styles.desc}>{service.desc}</div>
                            <span className={styles.cat}>{service.title}</span>
                            <div className={styles.media}>
                                {service.video ? (
                                    <video src={`/img/${service.video}`} autoPlay loop muted className={styles.video}/>
                                ) : (
                                    <Image src={`/img/${service.photo}`} alt="" width="100%" height="100%" layout="responsive" objectFit="cover"/>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Services