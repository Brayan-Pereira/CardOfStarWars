import Titulo from "./Title/Title"
import Paragrafo from "./Paragraph/Paragragh"
import Botao from "./Bottom/Bottom"
import Style from "./Text.module.css"

export default function Text(props){

    var tituloPoster = props.title
    return (
        <div className={Style.text_box}>
            <Titulo title = {tituloPoster}/>
            <Paragrafo/>
            <Botao/>
        </div>
    )
}