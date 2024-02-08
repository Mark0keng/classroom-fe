/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Alert } from '@mui/material';
import classes from './style.module.scss';
import { login } from './actions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const data = {
      email,
      password,
    };

    dispatch(
      login(
        data,
        () => {
          navigate('/course');
        },
        (errMessage) => {
          setError(errMessage);
        }
      )
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.title}>
          <FormattedMessage id="app_login" />
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
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className={classes.input}
          />
        </div>
        <div className={classes.forgot}>
          <FormattedMessage id="app_forgot_password" />
        </div>

        <div className={classes.button} onClick={handleSubmit}>
          <FormattedMessage id="app_login" />
        </div>

        <div
          className={classes.signup}
          onClick={() => {
            navigate('/signup');
          }}
        >
          <FormattedMessage id="app_no_account" />
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

export default Login;
