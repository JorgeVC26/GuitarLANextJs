import Image from "next/image"
import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (

    <Layout
      title={'Nosotros'}
      description="Sobre nosostros, GuitarLA, tienda de música"
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>
            <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen nosotros"/>

          <div>
            <p>Aliquam aliquet mauris eget libero dictum, nec dapibus turpis vulputate.
              Vivamus congue metus mollis semper vehicula. Duis eget erat cursus, iaculis mi eget, condimentum ipsum.
              Morbi commodo odio et tellus aliquet, id blandit ante scelerisque.
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              Integer vitae quam nibh. Aliquam quis porta elit. Aenean molestie in nisl vitae imperdiet.
           </p>

            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              Suspendisse semper ipsum bibendum semper dictum. Aenean quam ante, dapibus in mollis eu, interdum ac libero.
              Phasellus id nunc eget mi posuere efficitur id sit amet ligula. Proin placerat laoreet erat vitae eleifend.
           </p>
          </div>
        </div>
      </main>
    </Layout>


  )
}
