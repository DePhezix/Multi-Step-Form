'use client';
import "./page.sass";
import Step from '@/components/step/step';
import Step1 from '@/components/step1/step1';
import { useState } from 'react';

export default function Home() {
  const stepsList = ['Your Info', 'Select Plan', 'Add-Ons', 'Summary'];
  const stepsData = [
    { stepNo: 1, title: 'Personal info', subtitle: 'Please provide your name, email address, and phone number.' },
    { stepNo: 2, title: 'Select your plan', subtitle: 'You have the option of monthly or yearly billing.' },
    { stepNo: 3, title: 'Pick add-ons', subtitle: 'Add-ons help enhance your gaming experience.' },
    { stepNo: 4, title: 'Finishing up', subtitle: 'Double-check everything looks OK before confirming.' }
  ];

  const [currentStep, setCurrentStep] = useState<number>(1)

  const handleStepChange = (direction: 'next' | 'back') => {
    const newStep = direction === 'next' ? currentStep + 1 : currentStep - 1;
    if (newStep >= 1 && newStep <= stepsList.length) {
      setCurrentStep(newStep);
    }
  };

  const handleStepButtonClick = (direction: 'next' | 'back') => {
    handleStepChange(direction);
  };

  return (
    <div className='page'>
      <Step
        stepsList={stepsList}
        activeStepData={stepsData[currentStep - 1]}
        buttonClick={handleStepButtonClick}
      >
        {currentStep === 1 && <Step1 />}
      </Step>
    </div>
  );
}
