import AssignmentRounded from '@mui/icons-material/AssignmentRounded';
import classes from './style.module.scss';

const PostCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes.content}>
        <div className={classes.icon}>
          <AssignmentRounded />
        </div>
        <div className={classes.info}>
          <div className={classes.name}>Assignment 1</div>
          <div className={classes.createdAt}>10 Jan, 2020</div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
