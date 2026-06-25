

const Button = (props) => {

    return(

        <button onClick = {props.handleViewNote} >{props.btnText}</button>
    )
}

export default Button;