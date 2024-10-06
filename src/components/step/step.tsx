'use client'
import type {RootState} from '@/redux/store'
import { useAppDispatch } from "@/redux/hooks";
import { setField } from "@/redux/step/stepSlice";

import './step.sass'
import {LegacyRef, useRef} from "react";

interface Props {
  activeStepData: {
    stepNo: number,
    title: string
    subtitle: string
  }
  buttonClick: Function;
  stepsList: string[]
  children?: any
}

const Step: React.FC<Props> = ({activeStepData, stepsList, buttonClick, children}) => {
  const stepNo = activeStepData.stepNo
  const title = activeStepData.title
  const subtitle = activeStepData.subtitle
  const formRef = useRef<HTMLFormElement>(null)
  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const formObject = Object.fromEntries(formData.entries());

      Object.entries(formObject).forEach(([key, value]) => {
        dispatch(setField({ stepNo, field: key, value: value as string }));
      });

      buttonClick('next')
    }
  }

  return (
    <div className='step'>
      <div className='step__left-container'>
        {stepsList.map((stepName, idx) => (
          <div className='step__menu-step-container' key={idx}>
            <div className={`step__menu-step-number ${idx + 1 === stepNo ? 'step__menu-step-number--active' : ''}`}>{idx + 1}</div>
            <div className='step__menu-info'>
              <div className='step__menu-step-full-number'>STEP {idx + 1}</div>
              <div className='step__menu-title'>{stepName.toUpperCase()}</div>
            </div>
          </div>
        ))}
      </div>
      <form className='step__right-container' onSubmit={handleSubmit} ref={formRef}>
        <h1 className='step__title'>
          {title}
        </h1>
        <div className='step__subtitle'>
          {subtitle}
        </div>
        <div className='step__form'>
          {children}
        </div>
        <div className='step__buttons'>
          <div className='step__button step__button--back' onClick={() => buttonClick('back')}>{stepNo !== 1 ? 'Go Back' : ''}</div>
          <button className={`step__button step__button--next ${stepNo === stepsList.length ? 'step__button--confirm' : ''}`} type='submit'>{stepNo === stepsList.length ? 'Confirm' : 'Next Step'}</button>
        </div>
      </form>
    </div>
  )
}

export default Step
