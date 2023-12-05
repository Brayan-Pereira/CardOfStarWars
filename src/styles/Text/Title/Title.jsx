import Style from "./Title.module.css"

export default function Title(props) {

    var tituloPoster = props.title


    return (
        <div className={Style.title}>
            <h1>{tituloPoster}</h1>
        </div>
    )
}