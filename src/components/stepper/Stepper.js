import './Stepper.css';
import { Stepper as RSteper } from 'react-form-stepper';


const Stepper = ({currentStep, steps, style, activeColor, inActiveColor, completedColor}) => {

    return(
        <div className='steperContainer' style={style}>
            <RSteper
                steps={steps}
                activeStep={currentStep}
                styleConfig={{activeBgColor: activeColor, inactiveBgColor: inActiveColor, completedBgColor: completedColor}}
                connectorStateColors={true}
                connectorStyleConfig={{activeColor: activeColor, completedColor: completedColor, inActiveColor: inActiveColor}}
            />
        </div>
    )

}
export default Stepper;