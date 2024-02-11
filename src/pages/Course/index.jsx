import PropTypes from 'prop-types';
import { selectProfile } from '@containers/Client/selectors';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { createStructuredSelector } from 'reselect';
import { getCourse } from './actions';
import Card from './components/Card';

import { selectCourses } from './selector';
import classes from './style.module.scss';

const Course = ({ profile, courses }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getCourse({
        ...(profile.role === 1 && { student_id: profile.student_id }),
        ...(profile.role === 2 && { lecturer_id: profile.lecturer_id }),
        role: profile.role,
      })
    );
  }, [dispatch]);

  return (
    <div>
      <div className={classes.title}>My Courses</div>
      <Grid container spacing={3}>
        {courses?.map((course, index) => (
          <Grid key={index} item xs={12} md={6} lg={4}>
            <Card data={course} role={profile.role} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Course.propTypes = {
  profile: PropTypes.object,
  courses: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  profile: selectProfile,
  courses: selectCourses,
});

export default connect(mapStateToProps)(Course);
