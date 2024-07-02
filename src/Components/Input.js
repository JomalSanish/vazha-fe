import { useState } from 'react';
import { useEffect } from 'react';
const Input = (props) => {
    const [inputText, setInputText] = useState("");
    const [isValid, setIsValid] = useState(false);
    const handleInput = (e) => {
        setInputText(e.target.value);
        console.log(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValid) {
            alert("Invalid text")
        }
        else {

            props.addTaskHandler(inputText);
            setInputText("");
        }
    };
    useEffect(() => {
        if (inputText.length > 0) {
            setIsValid(true);
        }
        else {
            setIsValid(false);
        }
    }, [inputText]);
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter book name" value={inputText} onChange={handleInput}/>
            <button type="submit">Search</button>
        </form>
    );

}
export { Input }