"use client";
import "./step1.sass";
import FormInput from "@/components/FormInput/FormInput";
import { useAppSelector } from "@/redux/hooks";

const Step1: React.FC = () => {
  const initialName = useAppSelector((state) => state.stepsInfo.step1.name);
  const initialEmail = useAppSelector((state) => state.stepsInfo.step1.email);
  const initialPhone = useAppSelector(
    (state) => state.stepsInfo.step1.phoneNumber,
  );

  const initialValues = {
    name: initialName,
    email: initialEmail,
    phoneNumber: initialPhone,
  };

  const inputsData = [
    {
      label: "Name",
      placeholder: "e.g. Stephen King",
      type: "text",
      required: true,
      field: "name",
      inputName: "name",
    },
    {
      label: "Email Address",
      placeholder: "e.g. stephenking@lorem.com",
      type: "email",
      required: true,
      field: "email",
      inputName: "email",
    },
    {
      label: "Phone Number",
      placeholder: "e.g. +1 234 567 890",
      type: "tel",
      required: true,
      field: "phone",
      inputName: "phoneNumber",
    },
  ];

  return (
    <div className="first-step">
      {inputsData.map((inputData, idx) => (
        <FormInput
          key={idx}
          {...inputData}
          initialField={
            initialValues[inputData.inputName as keyof typeof initialValues]
          }
          className="first-step__form-input"
        />
      ))}
    </div>
  );
};

export default Step1;
