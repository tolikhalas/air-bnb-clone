function Input({ labelText, placeholderText }) {

    return(
        <div className={"bg-green-400"}>
            <label className={"block text-7xl"}> { labelText } </label>
            <input className={"block"} type={"text"} placeholder={ placeholderText } />
        </div>
    );
}

export default Input;
