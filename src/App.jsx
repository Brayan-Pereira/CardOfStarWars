import styles from "./styles/Card/Card.module.css"
import Image from "./styles/Poster/Poster"
import Texto from "./styles/Text/Text.jsx"
export default function App(){

  return (
    <div className={styles.app}>
      <Image />
      <Texto />
    </div>
  )
}