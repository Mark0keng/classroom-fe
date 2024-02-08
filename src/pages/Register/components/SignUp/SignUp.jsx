/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register, setData, setStep } from '@pages/Register/actions';

import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';

import classes from './style.module.scss';

const SignUp = ({ currentStep, data }) => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const prevHandler = () => {
    dispatch(setStep(currentStep - 1));
  };

  const handleSubmit = () => {
    const userData = {
      username,
      name: username,
      email,
      password,
      role: data.role,
    };

    dispatch(
      register(
        userData,
        () => {
          navigate('/login');
        },
        (errMessage) => {
          setError(errMessage);
        }
      )
    );
  };

  return (
    <div>
      <p>
        <FormattedMessage id="app_signup_as" />{' '}
        {data?.role === 1 ? <FormattedMessage id="app_student" /> : <FormattedMessage id="app_lecturer" />}
      </p>
      <div className={classes.form}>
        <p className={classes.label}>Username</p>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className={classes.input}
        />
      </div>
      <div className={classes.form}>
        <p className={classes.label}>Email</p>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className={classes.input}
        />
      </div>
      <div className={classes.form}>
        <p className={classes.label}>Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className={classes.input}
        />
      </div>
      <div className={classes.submitSection}>
        <div className={classes.prev} onClick={prevHandler}>
          <FormattedMessage id="app_signup_prev" />
        </div>
        <div className={classes.next} onClick={handleSubmit}>
          Submit
        </div>
      </div>

      {error && (
        <div className={classes.error}>
          <Alert variant="filled" severity="error">
            {error}
          </Alert>
        </div>
      )}
    </div>
  );
};

export default SignUp;
