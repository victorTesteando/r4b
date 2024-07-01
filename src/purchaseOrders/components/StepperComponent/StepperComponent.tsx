"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import PreViewPurchaseOrders from '../PreViewPurchaseOrders/PreViewPurchaseOrders';
const steps = ['Datos del orden', 'Condiciones', 'Pago'];
import "./stepperComponent.css"
interface StepContentProps {
    step: number;
}

const StepContent: React.FC<StepContentProps> = ({ step }) => {
    switch (step) {
        case 0:
            return <PreViewPurchaseOrders />;
        case 1:
            return <div>Componente del Paso 2</div>;
        case 2:
            return <div>Componente del Paso 3</div>;
        default:
            return <div>Componente desconocido</div>;
    }
};

const StepperComponent: React.FC = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = { ...completed };
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <>
                {allStepsCompleted() ? (
                    <>
                        <div>
                            All steps completed - youe finished
                        </div>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </>
                ) : (
                    <>
                        <>
                            <StepContent step={activeStep} />
                        </>
                        <div className='stepper-footer'>
                            <div className='stepper-footer-summary'>
                                <div className=''>
                                    <div>
                                        <span>Total de colaboradores</span>
                                        <span>100</span>
                                    </div>
                                    <div>
                                        <span>Total de créditos</span>
                                        <span>$101.000 COP</span>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='stepper-footer-buttons'>
                                <Button
                                    className='button-return'
                                    // disabled={activeStep === 0}
                                    onClick={handleBack}
                                >
                                    Volver
                                </Button>
                                <Button 
                                    className='button-fill'
                                    onClick={handleNext}>
                                    Seguir
                                </Button>
                            </div>
                            {/* {activeStep !== steps.length &&
                                (completed[activeStep] ? (
                                    <div>
                                        Step {activeStep + 1} already completed
                                    </div>
                                ) : (
                                    <Button onClick={handleComplete}>
                                        {completedSteps() === totalSteps() - 1
                                            ? 'Finish'
                                            : 'Complete Step'}
                                    </Button>
                                ))} */}
                        </div>
                    </>
                )}
            </>
        </>
    );
}

export default StepperComponent;
