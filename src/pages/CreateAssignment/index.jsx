import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createAssignment } from './actions';
import { useNavigate, useParams } from 'react-router-dom';
import { Alert } from '@mui/material';

import classes from './style.module.scss';

const CreateAssignment = () => {
  const { code } = useParams();
  const [name, setName] = useState('');
  const [instruction, setInstruction] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = {
      name,
      instruction,
      dueDate,
    };

    dispatch(
      createAssignment(
        data,
        code,
        () => {
          navigate(`/course/${code}`);
        },
        (errMessage) => {
          setError(errMessage);
        }
      )
    );
  };
  return (
    <div className={classes.card}>
      <div className={classes.title}>Assignment</div>
      <div className={classes.inputSection}>
        <div className={classes.formControl}>
          <p className={classes.label}>Name</p>
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
          <p className={classes.label}>Instruction</p>
          <textarea
            className={classes.textarea}
            cols="30"
            rows="10"
            value={instruction}
            onChange={(e) => {
              setInstruction(e.target.value);
            }}
          ></textarea>
        </div>
        <div className={classes.formControl}>
          <p className={classes.label}>Due Date</p>
          <input
            className={classes.input}
            type="datetime-local"
            value={dueDate}
            onChange={(e) => {
              setDueDate(e.target.value);
            }}
          />
        </div>
      </div>

      <div className={classes.button} onClick={handleSubmit}>
        Submit
      </div>

      {error && (
        <div className={classes.error}>
          <Alert
            severity="error"
            sx={{ padding: '3px 20px', lineHeight: 1, marginBottom: 2, width: 'fit-content' }}
            icon={false}
          >
            {error}
          </Alert>
        </div>
      )}
    </div>
  );
};

export default CreateAssignment;
