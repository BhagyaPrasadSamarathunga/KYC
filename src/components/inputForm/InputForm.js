import { useState } from "react";
import { CATEEGORIES_PROPS } from "../../utils/constants/general";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './InputForm.css'

const InputForm = ({category, onSubmitClick}) => {

    const[userInput,setUserInput]= useState();

    return(
        <Card className='inputForm' style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>{CATEEGORIES_PROPS[category].inputFormTitle}</Card.Title>
            <div className='inputField'> 
                <input onChange={(e)=>setUserInput(e.target.value)}></input>
                <Button className='submitButton' as="input" type="submit" value="Submit" onClick={()=>onSubmitClick(userInput, category)}/>
            </div>
            </Card.Body>
        </Card>
    )
}
export default InputForm;