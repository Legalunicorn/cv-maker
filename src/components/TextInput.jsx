import "../styles/TextInput.scss"

function TextInput({value='',handleChange,type,name,id=0}){
    return(
        <>
            <p className="text-label">{name}</p>
            <input
                data-id={id}
                type={type}
                value={value}
                onChange={handleChange}
            >
            </input>
        </>
    )
}

export {TextInput};