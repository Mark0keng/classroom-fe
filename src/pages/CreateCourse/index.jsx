import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProfile } from '@containers/Client/selectors';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import classes from './style.module.scss';
import { createCourse } from './actions';

const CreateCourse = ({ profile }) => {
  const [name, setName] = useState();
  const [subject, setSubject] = useState();
  const [room, setRoom] = useState();
  const [description, setDescription] = useState();
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = {
      name,
      subject,
      room,
      description,
      lecturer_id: profile.lecturer_id,
    };
    dispatch(
      createCourse(
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
      <div className={classes.title}>Create Course</div>

      <div className={classes.input}>
        <div className={classes.formControl}>
          <p className={classes.label}>Class Name</p>
          <input
            className={classes.input}
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className={classes.formControl}>
          <p className={classes.label}>Subject</p>
          <input
            className={classes.input}
            type="text"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
        </div>
        <div className={classes.formControl}>
          <p className={classes.label}>Room</p>
          <input
            className={classes.input}
            type="text"
            value={room}
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
        </div>
        <div className={classes.formControl}>
          <p className={classes.label}>Description</p>
          <textarea
            className={classes.textarea}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            cols="30"
            rows="10"
          />
        </div>
      </div>

      <div className={classes.button} onClick={handleSubmit}>
        Submit
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

CreateCourse.propTypes = {
  profile: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  profile: selectProfile,
});

export default connect(mapStateToProps)(CreateCourse);
