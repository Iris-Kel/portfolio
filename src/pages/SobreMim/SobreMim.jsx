import PostModelo from "../../componentes/PostModelo/PostModelo"
import fotoCapa from '../../assets/sobre_mim_capa.png'
import minhafoto from '../../assets/minhafoto.jpg'
import styles from './SobreMim.module.css'

const SobreMim = () => {
    return (
        <PostModelo 
        fotoCapa={fotoCapa}
        titulo="Sobre Mim"
        >
           <h3 className={styles.subtitulo}>Olá, eu sou Íris</h3>

           <img 
           className={styles.fotoSobreMim}
           src={minhafoto} 
           alt="Foto de Íris"
            />

            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quam ipsam mollitia exercitationem itaque cupiditate nesciunt quo debitis quis, rem officia porro dolorem similique recusandae libero distinctio provident neque odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque assumenda quo excepturi. Adipisci possimus cum ullam! Dolorem, optio earum eligendi similique iusto asperiores fuga nam quis, unde quisquam officia animi?</p>

            <p className={styles.paragrafo}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, sit corrupti explicabo magnam repudiandae, tempore eius illo, id quam esse ipsam! Neque veniam blanditiis vero voluptate dolores placeat, voluptatibus sint! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam aut, exercitationem quos recusandae, accusamus rem nulla molestias vel quas neque, maxime soluta modi adipisci earum officia harum reprehenderit ducimus corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto necessitatibus officiis reprehenderit non quaerat dolores earum veniam magni facilis laborum dolorum consequuntur aliquid nesciunt perferendis, odit minus amet quo error?</p>

            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit asperiores fuga itaque eius culpa vitae id commodi, eligendi officiis mollitia corporis quo maxime deserunt aliquid sapiente? Ab laboriosam soluta nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsa aut magni expedita quae fugiat libero iste omnis quia quidem quis, et enim fuga iusto illo, quibusdam dicta aspernatur veritatis?</p>

            <p className={styles.paragrafo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, veniam itaque velit explicabo error a ullam corporis exercitationem, mollitia beatae odit quae consectetur veritatis, similique aspernatur ut. Autem, delectus eaque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem perspiciatis ex cum voluptatibus provident temporibus a animi vel quasi dignissimos illum error necessitatibus alias, molestias eligendi labore possimus blanditiis nisi.</p>
        </PostModelo>
    )
}

export default SobreMim