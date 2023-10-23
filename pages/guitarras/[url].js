import { useRouter } from "next/router"
import { useState } from "react";
import Image from "next/image"
import styles from "../../styles/guitarras.module.css"
import Layout from "../../components/layout";

export default function Producto({ guitarra, agregarCarrito }) {
    if (guitarra) {

      const [cantidad, setCantidad] = useState(0)
      const { nombre, descripcion, imagen, precio } = guitarra.attributes;
  
      const handleSubmit = e => {
        e.preventDefault()

        if(cantidad < 1) {
          alert ('cantida no valida')
          return
        }

        // Construir un objeto
        const guitarraSeleccionada = {
          id: guitarra.id,
          imagen: imagen.data.attributes.url,
          nombre,
          precio,
          cantidad
        }

        //  Pasando la informacion
        agregarCarrito(guitarraSeleccionada)
      }
      return (
        <Layout
            title={`Guitarra ${nombre}`}
        >
        <div>
          <div className={styles.guitarra}>
            <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />
            <div className={styles.contenido}>
              <h3>{nombre}</h3>
              <p className={styles.descripcion}>{descripcion}</p>
              <p className={styles.precio}>${precio}</p>

              <form 
              onSubmit={handleSubmit}
              className={styles.formulario}
              >
                <label htmlFor="cantidad">Cantidad:</label>

                <select 
                onChange={e => setCantidad(+e.target.value)}
                id="cantidad">
                  <option value="0">-- Seleccione --</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>

                <input
                    type="submit"
                    value="Agregar al carrito"
                />
              </form>
            </div>
          </div>
        </div>
        </Layout>
      );
    } else {
      return <div>Cargando datos...</div>;
    }
  }
  
  export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
    const { data } = await respuesta.json();
  
    if (data) {
      const paths = data.map((guitarra) => ({
        params: {
          url: guitarra.attributes.url,
        },
      }));
      return {
        paths,
        fallback: false,
      };
    } else {
      return {
        paths: [],
        fallback: false,
      };
    }
  }
  
  export async function getStaticProps({ params: { url } }) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
    const { data: guitarra } = await respuesta.json();
  
    return {
      props: {
        guitarra: guitarra[0], // Devuelve la primera guitarra encontrada
      },
    };
  }

// export async function getServerSideProps({query: {url}}) {
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&
//     populate=imagen`)
//     const {data: guitarra} = await respuesta.json()

//     return  {
//         props: {
//             guitarra
//         }
//     }
// }