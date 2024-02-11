import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMember } from './actions';
import { selectMember } from './selector';
import { createStructuredSelector } from 'reselect';

import { Avatar, Dialog } from '@mui/material';
import { PersonRemoveRounded } from '@mui/icons-material';
import classes from './style.module.scss';

const MemberCourse = ({ member }) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const { code } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMember(code, (errMessage) => {
        setError(errMessage);
      })
    );
  }, [dispatch]);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={classes.navigation}>
        <div className={classes.item}>Stream</div>
        <div className={classes.item}>Assignment</div>
        <div className={classes.item}>People</div>
      </div>
      <div className={classes.card}>
        <div className={classes.box}>
          <div className={classes.header}>Lecturer</div>
          <hr />
          <div className={classes.userCard}>
            <div className={classes.userSection}>
              <Avatar alt={member?.lecturer?.name} src="" />
              <div className={classes.name}>{member?.lecturer?.name}</div>
            </div>
          </div>
        </div>

        <div className={classes.box}>
          <div className={classes.header}>Students</div>
          <hr />
          {member?.students?.map((student, index) => (
            <div className={classes.userCard} key={index}>
              <div className={classes.userSection}>
                <Avatar alt={member?.lecturer?.name} src="" />
                <div className={classes.name}>{student.name}</div>
              </div>

              <div className={classes.actionSection}>
                <div className={classes.removeBtn} onClick={handleModalOpen}>
                  <PersonRemoveRounded />
                </div>
                <Dialog
                  onClose={handleModalClose}
                  open={open}
                  slotProps={{ backdrop: { style: { backgroundColor: 'rgba(255,255,255,0.4)' } } }}
                >
                  <div className={classes.modalContent}>
                    <div className={classes.modalTitle}>Remove Student</div>
                    <div className={classes.modalDesc}>This action will remove this student, are you sure?</div>
                  </div>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

MemberCourse.propTypes = {
  member: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  member: selectMember,
});

export default connect(mapStateToProps)(MemberCourse);
