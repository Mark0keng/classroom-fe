import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editCourse } from '@pages/DetailCourse/actions';

import classes from './style.module.scss';
import { Dialog } from '@mui/material';

const EditCourse = ({ course, open, onClose }) => {
  const [name, setName] = useState(course.name || '');
  const [subject, setSubject] = useState(course.subject || '');
  const [room, setRoom] = useState(course.room || '');
  const [description, setDescription] = useState(course.room || '');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const data = {
      name,
      subject,
      room,
      description,
    };
    dispatch(editCourse(data, course?.id));
  };

  return (
    <Dialog
      open={open}
      onClose={() => {
        onClose();
      }}
      slotProps={{ backdrop: { style: { backgroundColor: 'rgba(255,255,255,0.4)' } } }}
    >
      <div className={classes.title}>Edit Course</div>
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
    </Dialog>
  );
};

export default EditCourse;
