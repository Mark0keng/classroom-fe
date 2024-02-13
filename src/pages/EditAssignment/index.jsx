import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Alert from '@mui/material/Alert';

import { createStructuredSelector } from 'reselect';
import { selectAssignment } from '@pages/DetailAssignment/selector';
import { editAssignment, getAssignment } from './actions';

import classes from './style.module.scss';

const EditAssignment = ({ assignment }) => {
  const formatDate = new Date(assignment?.dueDate).toISOString().slice(0, 16);
  const { id, code } = useParams();
  const [name, setName] = useState(assignment?.name || '');
  const [instruction, setInstruction] = useState(assignment?.instruction || '');
  const [dueDate, setDueDate] = useState(formatDate || '');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAssignment(id));
  }, [dispatch, id]);

  const handleSubmit = () => {
    const data = {
      name,
      instruction,
      dueDate,
    };
    dispatch(
      editAssignment(
        data,
        code,
        id,
        () => {
          navigate(`/course/${code}/assignment/${id}`);
        },
        (errMessage) => {
          setError(errMessage);
        }
      )
    );
  };

  return (
    <div className={classes.card}>
      <div className={classes.title}>Edit Assignment</div>

      {error && (
        <div className={classes.error}>
          <Alert variant="filled" severity="error">
            {error}
          </Alert>
        </div>
      )}

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
          />
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
    </div>
  );
};

EditAssignment.propTypes = {
  assignment: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  assignment: selectAssignment,
});

export default connect(mapStateToProps)(EditAssignment);
