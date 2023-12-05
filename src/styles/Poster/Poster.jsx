import styles from "./Poster.module.css"

export default function Poster(props) {
    var url = props.urlImage
    return(
        <img className={styles.poster} src={url}/>
    )
    
}