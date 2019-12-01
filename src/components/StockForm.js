import React, { useState } from "react";
import styled from "styled-components";

// the stockForm that takes the inputted field of the form to the state, and passes it onSubmit.



const FormDiv = styled.div`
  padding: 10px 0;
  
  
  display: flex; 
  justify-content: center; 
  flex-flow: column nowrap; 
`;

const FormInput = styled.input `
 background: hsl(220, 12%, 95%) !important;
 &:focus {
   border-color: green !important; 
 }
`
// The StockForm is responsible for allowing a user to enter in information, and pass it to the parent component via callback.
const StockForm = props => {
  // 
  const [fieldInfo, setFieldInfo] = useState();
  const [formState, setFormState] = useState();
// the handleChange callback responsible for rendering inputted form text back to the user.
  const handleChange = e => {
    setFieldInfo(e.target.value);
  };

  // the handleSubmit callback is invoked with formData, and passes it to the parent via the parents onSubmit callback.
  const handleSubmit = e => {
    props.onSubmit(fieldInfo);
    e.preventDefault();
  };

  // Rendering Form utilizing semantic UI classNames if text is inputted or not. 
  const formErrorClass = () => {
    let className = "ui form";
    if (formState === "clicked") {
      if (fieldInfo.length === 0) {
        className = "ui form error";
        return className;
      }
    }
    return className;
  };
  // prompting the user on the correct actions to take to fix the error. 
  const fieldErrorClass = () => {
    let className = "field";
    if (formState === "clicked") {
      if (fieldInfo.length === 0) {
        className = "field error";
        return className;
      }
    }

    return className;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={formErrorClass()}
      onBlur={() => setFormState("clicked")}
    >
      <div>
        <FormDiv className={fieldErrorClass()}>
          <FormInput
            onChange={handleChange}
            placeholder={props.placeholder}
            required={true}
            value={fieldInfo}
          />
          <div className="ui error message">
            <div className="header">{props.errorHeader}</div>
            <p>{props.errorMessage}</p>
          </div>
        </FormDiv>
      </div>

      <FormDiv>
        <input
          className="ui button green"
          type="submit"
          value={props.buttonText}
        />
      </FormDiv>
    </form>
  );
};

export default StockForm;
