import React from 'react';
import { useDispatch } from 'react-redux';

import classes from './style.module.scss';

const DetailCourse = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className={classes.navigation}>
        <div className={classes.item}>Stream</div>
        <div className={classes.item}>Assignment</div>
        <div className={classes.item}>People</div>
      </div>
    </div>
  );
};

export default DetailCourse;
