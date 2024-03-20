import './CategoryTile.css';
import { CATEEGORIES_PROPS } from "../../utils/constants/general";
import Card from 'react-bootstrap/Card';

const CategoryTile = ({category, onClick}) => {
    return(
        <Card onClick={()=>onClick(category)} className="cardBlock">
            <Card.Body>
                <Card.Title>{CATEEGORIES_PROPS[category].displayName}</Card.Title>
                <Card.Text>
                    {CATEEGORIES_PROPS[category].content}
                </Card.Text>
            </Card.Body>
        </Card>
    )

}
export default CategoryTile; 