/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { selectProfile } from '@containers/Client/selectors';
import classes from './style.module.scss';
import { joinCourse } from './actions';

const JoinCourse = ({ profile }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = {
      student_id: profile.student_id,
      code,
    };
    dispatch(
      joinCourse(
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
    <div className={classes.card}>
      <div className={classes.title}>Join Course</div>

      <div className={classes.box}>
        <p className={classes.info}>to join a class, enter the class code here</p>

        {error && (
          <div className={classes.error}>
            <Alert severity="error" sx={{padding: "3px 20px", lineHeight: 1, marginBottom:2, width: "fit-content"}} icon={false}>
              {error}
            </Alert>
          </div>
        )}

        <div className={classes.submitSection}>
          <div className={classes.formControl}>
            <p className={classes.label}>Class Code</p>
            <input
              type="text"
              className={classes.input}
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
              }}
            />
          </div>

          <div className={classes.button} onClick={handleSubmit}>
            Submit
          </div>
        </div>

        <p className={classes.instruction}>* Use a class code with 5-7 letters or numbers, and no spaces or symbols</p>
      </div>
    </div>
  );
};

JoinCourse.propTypes = {
  profile: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  profile: selectProfile,
});

export default connect(mapStateToProps)(JoinCourse);
