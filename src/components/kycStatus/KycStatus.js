import './KycStatus.css';
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const KycStatus = ({kycData, errorMsg}) => {
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        if(kycData) {
            setIsVerified(kycData.isVerified);
        }
    },[kycData]);

    const handleProceedButtonClick = (url) => {
        window.open(url);
    }

    const DataRow = ({title, value}) => {
        return <div className='dataRow'>
            <span> {title} : {value}</span>
        </div>
    }

    const KycData = ({data}) => {
        return (
            <Card className='kycData'>
                <Card.Body>
                    <Card.Title>{data.label}</Card.Title>
                    <DataRow title={'Update On'} value={data.updatedOn} /> 
                    <DataRow title={'Status'} value={data.status.label} />
                    <Button variant="primary" onClick={() => handleProceedButtonClick(data.link.url)}>Proceed</Button>
                </Card.Body>
            </Card>
        )
    }
    
    return(
        <div>
            {isVerified && 
                <div>
                    <span>Verified account</span>
                </div>
            }
            {kycData && 
                <div className='kycDataContainer'> 
                    {kycData.attributes.map(item => (
                            <KycData data={item} key={item.id}/>
                    ))}
                </div>
            }
        </div>
    )

}
export default KycStatus; 