/* eslint-disable react/prop-types */
import AssignmentRounded from '@mui/icons-material/AssignmentRounded';
import { dateFormat } from '@utils/dateFormatter';
import { useNavigate } from 'react-router-dom';

import classes from './style.module.scss';

const PostCard = ({ assignment, courseCode }) => {
  const navigate = useNavigate();
  return (
    <div
      className={classes.card}
      onClick={() => {
        navigate(`/course/${courseCode}/assignment/${assignment?.id}`);
      }}
    >
      <div className={classes.content}>
        <div className={classes.icon}>
          <AssignmentRounded />
        </div>
        <div className={classes.info}>
          <div className={classes.name}>{assignment?.name}</div>
          <div className={classes.createdAt}>{dateFormat(assignment?.createdAt)}</div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
