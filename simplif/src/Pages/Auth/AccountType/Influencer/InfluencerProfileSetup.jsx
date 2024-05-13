import React, { useState } from 'react';
import {
    Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8
} from '../../../../Components/index.js'; // Ensure this path matches where your step components are located
import { Box } from '@mui/material';

const InfluencerProfileSetup = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        step1: {}, step2: {}, step3: {}, step4: {},
        step5: {}, step6: {}, step7: {}, step8: {}
    });
    
    console.log("formData",formData);

    const goToNextStep = (currentStepData) => {
        const stepKey = `step${step}`;
        setFormData(prevData => ({
            ...prevData,
            [stepKey]: currentStepData
        }));
        if (step < 8) {
            setStep(step + 1);
        } else {
            handleSubmit();
        }
    };

    // Handle the final submission of all form data
    const handleSubmit = () => {
        console.log("Final Submission Data", formData);
    };

    const renderStep = () => {
        const stepProps = {
            goToNextStep: goToNextStep,
            initialData: formData[`step${step}`]
        };
        switch (step) {
            case 1: return <Step1 {...stepProps} />;
            case 2: return <Step2 {...stepProps} />;
            case 3: return <Step3 {...stepProps} />;
            case 4: return <Step4 {...stepProps} />;
            case 5: return <Step5 {...stepProps} />;
            case 6: return <Step6 {...stepProps} />;
            case 7: return <Step7 {...stepProps} />;
            case 8: return <Step8 {...stepProps} />;
            default: return <Box sx={{ p: 4 }}>Invalid step</Box>;
        }
    };

    return (
        <Box sx={{
            width: "100%", height: 'auto',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            mt: 2, mb: 6, overflow: 'hidden'
        }}>
            {renderStep()}
        </Box>
    );
};

export default InfluencerProfileSetup;
