import styles from "./styles/Card/Card.module.css"
import Image from "./styles/Poster/Poster"
import Texto from "./styles/Text/Text.jsx"

export default function App(props){
  var tituloPoster = props.title
  var url = props.urlImage

  return (
    <div className={styles.app}>
      <Image urlImage= {url}/>
      <Texto title = {tituloPoster}/>
      
    </div>
  )
}