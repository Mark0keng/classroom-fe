import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getAssignment } from './actions';
import { Grid } from '@mui/material';
import PostCard from './components/PostCard/PostCard';
import AddRounded from '@mui/icons-material/AddRounded';
import { useNavigate, useParams } from 'react-router-dom';
import { selectAssignment } from './selector';
import { createStructuredSelector } from 'reselect';
import { selectProfile } from '@containers/Client/selectors';

import classes from './style.module.scss';

const DetailCourse = ({ profile, assignments }) => {
  const { code } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAssignment(code));
  }, [dispatch]);

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
        <div className={classes.item}>Assignment</div>
        <div
          className={classes.item}
          onClick={() => {
            navigate(`/course/${code}/member`);
          }}
        >
          People
        </div>
      </div>

      <div className={classes.banner}>Statitika 2024</div>
      <div>
        <Grid container spacing={5}>
          <Grid item xs={0} md={3}>
            <div className={classes.infoSection}></div>
          </Grid>
          <Grid item xs={0} md={9}>
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

              {assignments?.map((assignment, index) => (
                <PostCard assignment={assignment} courseCode={code} key={index} />
              ))}
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
};

const mapStateToProps = createStructuredSelector({
  profile: selectProfile,
  assignments: selectAssignment,
});

export default connect(mapStateToProps)(DetailCourse);
