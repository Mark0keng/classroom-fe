import React from 'react';
import { useDispatch } from 'react-redux';

import classes from './style.module.scss';
import { Grid } from '@mui/material';
import PostCard from './components/PostCard/PostCard';
import AddRounded from '@mui/icons-material/AddRounded';
import { useNavigate, useParams } from 'react-router-dom';

const DetailCourse = () => {
  const { code } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
              <div className={classes.createBtn}>
                <AddRounded /> Create
              </div>

              <PostCard />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DetailCourse;
