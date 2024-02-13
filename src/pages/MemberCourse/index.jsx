import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectProfile } from '@containers/Client/selectors';
import { Avatar, Dialog } from '@mui/material';
import { PersonRemoveRounded } from '@mui/icons-material';
import { selectMember } from './selector';
import { deleteMember, getMember } from './actions';

import classes from './style.module.scss';

const MemberCourse = ({ member, profile }) => {
  const [memberId, setMemberId] = useState('');
  const [open, setOpen] = useState(false);
  const { code } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getMember(code, (error) => {
        if (error.statusCode === 404) {
          navigate('/not-found');
        }
      })
    );
  }, [code, dispatch, navigate]);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleDeleteMember = () => {
    dispatch(deleteMember(memberId, code));
  };

  return (
    <div>
      <div className={classes.navigation}>
        <div
          className={classes.item}
          onClick={() => {
            navigate(`/course/${code}`);
          }}
        >
          Stream
        </div>
        <div
          className={classes.item}
          onClick={() => {
            navigate(`/course/${code}/member`);
          }}
        >
          People
        </div>
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
                {profile.role === 2 && (
                  <div
                    className={classes.removeBtn}
                    onClick={() => {
                      setMemberId(student.id);
                      handleModalOpen();
                    }}
                  >
                    <PersonRemoveRounded />
                  </div>
                )}
                <Dialog
                  onClose={handleModalClose}
                  open={open}
                  slotProps={{ backdrop: { style: { backgroundColor: 'rgba(255,255,255,0.4)' } } }}
                >
                  <div className={classes.modalContent}>
                    <div className={classes.modalTitle}>Remove Student</div>
                    <div className={classes.modalDesc}>This action will remove this student, are you sure?</div>
                    <div
                      className={classes.submit}
                      onClick={() => {
                        handleDeleteMember();
                        handleModalClose();
                      }}
                    >
                      Submit
                    </div>
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
  profile: PropTypes.object,
  member: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  profile: selectProfile,
  member: selectMember,
});

export default connect(mapStateToProps)(MemberCourse);
