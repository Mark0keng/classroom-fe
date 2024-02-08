/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import classes from './style.module.scss';
import { setData, setStep } from '../../actions';
import { FormattedMessage } from 'react-intl';

const RoleInput = ({ currentStep, data }) => {
  const [role, setRole] = useState(data?.role || null);
  const dispatch = useDispatch();

  const nextHandler = () => {
    if (currentStep === 2) {
      dispatch(setStep(1));
    } else {
      dispatch(setStep(currentStep + 1));
    }
  };

  const handleSubmit = () => {
    dispatch(setData({ role }));
  };

  return (
    <div>
      <p>
        <FormattedMessage id="app_signup_ass" />?
      </p>
      <div className={classes.roleInput}>
        <div
          className={role === 1 ? classes.roleItemActive : classes.roleItem}
          onClick={() => {
            setRole(1);
          }}
        >
          <FormattedMessage id="app_student" />
        </div>
        <div
          className={role === 2 ? classes.roleItemActive : classes.roleItem}
          onClick={() => {
            setRole(2);
          }}
        >
          <FormattedMessage id="app_lecturer" />
        </div>
      </div>
      <div className={classes.button}>
        <div
          className={classes.next}
          onClick={() => {
            handleSubmit();
            nextHandler();
          }}
        >
          <FormattedMessage id="app_signup_next" />
        </div>
      </div>
    </div>
  );
};

export default RoleInput;
