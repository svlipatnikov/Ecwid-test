import React from 'react';
import { useSelector } from 'react-redux';
import { errorsSelector } from 'redux/selectors/errorSelector';
import './errorMessage.scss';

const ErrorMessage = () => {
  const errors = useSelector(errorsSelector);
  return (
    <div className="error-message">
      {!!errors.length &&
        errors.map((errMessage) => (
          <div key={errMessage} className="error-message__text">
            {errMessage}
          </div>
        ))}
    </div>
  );
};

export default ErrorMessage;
