import { Avatar } from '@mui/material';
import classes from './style.module.scss';

const MemberCourse = () => {
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
          <div className={classes.userSection}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className={classes.name}>Farras Arkan</div>
          </div>
        </div>

        <div className={classes.box}>
          <div className={classes.header}>Students</div>
          <hr />
          <div className={classes.userSection}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className={classes.name}>Farras Arkan</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCourse;
