import './App.css';
import { useEffect, useState } from 'react';
import CategoryTile from './components/categoryTile/CategoryTile';
import useFetchData from '../src/hooks/useFetch';
import KycStatus from './components/kycStatus/KycStatus';
import Stepper from './components/stepper/Stepper';
import InputForm from './components/inputForm/InputForm';
import { CATEEGORIES_PROPS, CATEGORY_LIST } from './utils/constants/general';
import { ApiMethods, BASE_URL } from './utils/constants/api';
import Spinner from 'react-bootstrap/Spinner';
import { BLUE_100, BLUE_200, GRAY_150, GRAY_50 } from './theme/colors';

function App() {

  const[currentStep, setCurrentStep] = useState(0);
  const[selectedCatogary,setSelectedCatogary]= useState('');
  const {data, errorMsg, isLoading, getData} = useFetchData();

  useEffect(() => {
    if(data) {
      setCurrentStep(2);
    }
  },[data]);

  const handelCatogaryClick = (category) => {
    setCurrentStep(1);
    setSelectedCatogary(category);
  }

  const getKycStatus = (input, category) => {
    getData(`${BASE_URL}${CATEEGORIES_PROPS[category].endPoint}${input}`,ApiMethods.GET);
  }

  return (
    <div className="container">
      <div className='content'>
        <Stepper 
          currentStep={currentStep} 
          steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }]}
          style={{backgroundColor: GRAY_50}}
          activeColor={BLUE_100}
          inActiveColor={GRAY_150}
          completedColor={BLUE_200}
        />
          {isLoading && <div className='spinner'>
            <Spinner animation="border" color='gray' />
          </div>} 
          {currentStep === 0 ? (
            <div className='categoryContainer'> 
              {CATEGORY_LIST.map((category) => {
                return (
                  <div className='category' key={CATEEGORIES_PROPS[category].id}>
                    <CategoryTile category={category} onClick={(category)=>handelCatogaryClick(category)}/>
                  </div>
                )})}
            </div>
          ) 
          : currentStep === 1 ? 
            <div className='inputContainer'><InputForm category={selectedCatogary} onSubmitClick={(input, category)=>getKycStatus(input, category)}/></div>
          : <div className='kycStatus'><KycStatus kycData={data} errorMsg={errorMsg} /></div>
          }
          {errorMsg && <div className="error">{errorMsg}</div>}
      </div>
    </div>
  );
}

export default App;
