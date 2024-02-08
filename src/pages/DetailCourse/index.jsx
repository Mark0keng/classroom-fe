import React from 'react';
import { useDispatch } from 'react-redux';

import classes from './style.module.scss';
import { Grid } from '@mui/material';

const DetailCourse = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className={classes.navigation}>
        <div className={classes.item}>Stream</div>
        <div className={classes.item}>Assignment</div>
        <div className={classes.item}>People</div>
      </div>

      <div className={classes.banner}>
        Statitika 2024
      </div>
      <div>
        <Grid container spacing={5}>
          <Grid item xs={0} md={3}>
            <div className={classes.infoSection}></div>
          </Grid>
          <Grid item xs={0} md={9}>
            <div className={classes.postSection}></div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DetailCourse;
