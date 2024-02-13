import PropTypes from 'prop-types';
import { Dialog, Grid, Menu, MenuItem } from '@mui/material';
import { MoreVertRounded } from '@mui/icons-material';
import { useEffect, useState } from 'react';

import { dateTimeFormat } from '@utils/dateFormatter';
import { useNavigate, useParams } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProfile } from '@containers/Client/selectors';
import { deleteAssignment, getDetailAssignment } from './actions';
import { selectAssignment } from './selector';

import classes from './style.module.scss';
import SubmitSection from './components/SubmitSection';

const DetailAssignment = ({ assignment, profile }) => {
  const { id } = useParams();
  const { code } = useParams();
  const [open, setOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState(null);
  const menuOpen = Boolean(menuPosition);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const data = {
      role: profile.role,
      ...(profile?.role === 1 && { studentId: profile?.student_id }),
    };

    dispatch(
      getDetailAssignment(data, id, (error) => {
        if (error.statusCode === 404) {
          navigate('/not-found');
        }
      })
    );
  }, [dispatch, id, navigate, profile.role, profile?.student_id]);

  const handleClick = (event) => {
    setMenuPosition(event.currentTarget);
  };

  const handleClose = () => {
    setMenuPosition(null);
  };

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    dispatch(
      deleteAssignment(id, () => {
        navigate(`/course/${code}`);
      })
    );
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} md={7} lg={8} xl={9}>
        <div className={classes.card}>
          <div className={classes.header}>
            <div className={classes.title}>{assignment.name}</div>
            {profile.role === 2 && (
              <div className={classes.toolbar}>
                <div className={classes.iconBtn} onClick={handleClick}>
                  <MoreVertRounded />
                </div>
                <Menu open={menuOpen} anchorEl={menuPosition} onClose={handleClose}>
                  <MenuItem
                    className={classes.item}
                    onClick={() => {
                      navigate(`/course/${code}/assignment/${id}/edit`);
                    }}
                  >
                    Edit
                  </MenuItem>
                  <MenuItem className={classes.item} onClick={handleModalOpen}>
                    Delete
                  </MenuItem>
                </Menu>
              </div>
            )}
            <Dialog
              onClose={handleModalClose}
              open={open}
              slotProps={{ backdrop: { style: { backgroundColor: 'rgba(255,255,255,0.4)' } } }}
            >
              <div className={classes.modalContent}>
                <div className={classes.modalTitle}>Delete Assignment</div>
                <div className={classes.modalDesc}>This action will delete this assignment, are you sure?</div>
                <div
                  className={classes.submit}
                  onClick={() => {
                    handleDelete();
                    navigate(`/course/${code}`);
                  }}
                >
                  Submit
                </div>
              </div>
            </Dialog>
          </div>
          <div className={classes.dueDate}>Due {dateTimeFormat(assignment.dueDate)}</div>
          <hr />
          <div className={classes.instruction}>{assignment.instruction}</div>
        </div>
      </Grid>

      {profile.role === 1 && (
        <Grid item xs={12} md={5} lg={4} xl={3}>
          <SubmitSection assignment={assignment} profile={profile} />
        </Grid>
      )}
    </Grid>
  );
};

DetailAssignment.propTypes = {
  assignment: PropTypes.object,
  profile: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  assignment: selectAssignment,
  profile: selectProfile,
});

export default connect(mapStateToProps)(DetailAssignment);
