import { useState, useEffect } from "react";
import { CATEEGORIES_PROPS } from "../../utils/constants/general";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './InputForm.css';

const InputForm = ({category, onSubmitClick}) => {

    const[userInput,setUserInput]= useState();
    const[isSubmitEnable, setIsSubmitEnable]= useState(false);

    useEffect(() => {
    if (userInput && userInput.length > 0) {
        setIsSubmitEnable(true);
    } else {
        setIsSubmitEnable(false);
    }
    }, [userInput])

    return(
        <Card className='inputForm' style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>{CATEEGORIES_PROPS[category].inputFormTitle}</Card.Title>
            <div className='inputField'> 
                <input onChange={(e)=>setUserInput(e.target.value)}></input>
                <Button disabled={!isSubmitEnable} className='submitButton' as="input" type="submit" value="Submit" onClick={()=>onSubmitClick(userInput, category)}/>
            </div>
            </Card.Body>
        </Card>
    )
}
export default InputForm;