import Image from "next/image"
import Link from "next/link"
import { formatearFecha } from "../utils/helpers"
import styles from "../styles/blog.module.css"

export default function Post({post}) {

    const { contenido, imagen,  titulo, url, publishedAt } = post

    return (
    <article>
        {imagen && imagen.data && imagen.data.attributes && imagen.data.attributes.formats && imagen.data.attributes.formats.medium ? (
        <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`imagen blog ${titulo}`} />
        ) : (
        <p>La imagen no está disponible</p>
        )}

        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.resumen}>{contenido}</p>
            <Link legacyBehavior  href={`/blog/${url}`}>
                <a className={styles.enlace}> 
                    Leer Post
                </a>
            </Link>
        </div>
    </article>
  )
}
