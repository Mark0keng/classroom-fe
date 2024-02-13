/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { submitAssignment } from '@pages/DetailAssignment/actions';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { FilePresentRounded } from '@mui/icons-material';

import { createStructuredSelector } from 'reselect';
import { selectFileSubmit } from '@pages/DetailAssignment/selector';

import classes from './style.module.scss';

const SubmitSection = ({ assignment, profile, fileSubmit }) => {
  const [file, setFile] = useState('');
  // const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFile = (event) => {
    const fileUpload = event.target.files[0];
    setFile(fileUpload);
  };

  const handleSubmit = () => {
    const data = {
      fileSubmit: file,
      assignment_id: assignment?.id,
      student_id: profile?.student_id,
    };
    dispatch(
      submitAssignment(data, () => {
        navigate(0);
      })
    );
  };

  return (
    <div className={classes.card}>
      <div className={classes.submitSection}>
        <div>Your Work</div>
        <div className={classes.fileBox}>
          {fileSubmit ? (
            <Link to={fileSubmit} target="_blank" rel="noopener noreferrer" className={classes.file}>
              <FilePresentRounded /> {fileSubmit}
            </Link>
          ) : (
            <div>
              <div>Submit File Here</div>
              <input type="file" onChange={handleFile} />
            </div>
          )}
        </div>
        <div className={classes.submit} onClick={handleSubmit}>
          {fileSubmit ? <div>Unsubmit</div> : <div>Submit</div>}
        </div>
      </div>
    </div>
  );
};

SubmitSection.propTypes = {
  fileSubmit: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  fileSubmit: selectFileSubmit,
});

export default connect(mapStateToProps)(SubmitSection);
