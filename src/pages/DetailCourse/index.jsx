import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Dialog, Grid, Menu, MenuItem } from '@mui/material';
import AddRounded from '@mui/icons-material/AddRounded';
import { useNavigate, useParams } from 'react-router-dom';
import { MoreVertRounded } from '@mui/icons-material';
import { createStructuredSelector } from 'reselect';
import { selectProfile } from '@containers/Client/selectors';
import { deleteCourse, getCourseAssignment } from './actions';
import { selectAssignments, selectCourse } from './selector';
import PostCard from './components/PostCard/PostCard';
import EditCourse from './components/EditCourse';

import classes from './style.module.scss';

const DetailCourse = ({ profile, assignments, course }) => {
  const [error, setError] = useState('');
  const { code } = useParams();
  const [openDialog, setOpenDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState(null);
  const menuOpen = Boolean(menuPosition);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getCourseAssignment(code, (err) => {
        if (err.statusCode === 404) {
          setError(err.message);
        }
      })
    );
  }, [code, dispatch]);

  const handleDeleteCourse = () => {
    dispatch(
      deleteCourse(course?.id, () => {
        navigate('/course');
      })
    );
  };

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

  const handleOpenDialog = () => {
    setOpenDialog(!openDialog);
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
        {/* <div className={classes.item}>Assignment</div> */}
        <div
          className={classes.item}
          onClick={() => {
            navigate(`/course/${code}/member`);
          }}
        >
          People
        </div>
      </div>

      <div className={classes.banner}>
        <div>
          <div className={classes.title}>{course?.name}</div>
          <div className={classes.subject}>{course?.subject}</div>
        </div>
        <div>
          <div className={classes.round} onClick={handleClick}>
            <MoreVertRounded />
          </div>
          <Menu open={menuOpen} anchorEl={menuPosition} onClose={handleClose}>
            <MenuItem className={classes.item} onClick={handleOpenDialog}>
              Edit
            </MenuItem>
            <MenuItem className={classes.item} onClick={handleModalOpen}>
              Delete
            </MenuItem>
          </Menu>
        </div>
      </div>
      <EditCourse course={course} isOpen={openDialog} onClose={handleOpenDialog} />
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
              handleDeleteCourse();
              handleModalClose();
            }}
          >
            Submit
          </div>
        </div>
      </Dialog>
      <div>
        <Grid container spacing={5}>
          <Grid item xs="auto" md={3}>
            {/* <div className={classes.infoSection}></div> */}
          </Grid>
          <Grid item xs={12} md={9}>
            <div className={classes.postSection}>
              {profile.role === 2 && (
                <div
                  className={classes.createBtn}
                  onClick={() => {
                    navigate(`/course/${code}/create-assignment`);
                  }}
                >
                  <AddRounded /> Create
                </div>
              )}
              {error ? (
                <div>{error}</div>
              ) : (
                assignments?.map((assignment, index) => (
                  <PostCard assignment={assignment} courseCode={code} key={index} />
                ))
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

DetailCourse.propTypes = {
  profile: PropTypes.object,
  assignments: PropTypes.array,
  course: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  profile: selectProfile,
  assignments: selectAssignments,
  course: selectCourse,
});

export default connect(mapStateToProps)(DetailCourse);
