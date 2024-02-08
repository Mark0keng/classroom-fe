/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MeetingRoomRounded from '@mui/icons-material/MeetingRoomRounded';
import BookRounded from '@mui/icons-material/BookRounded';
import classes from './style.module.scss';

const Card = ({ data, role }) => {
  const navigate = useNavigate();

  return (
    <div
      className={classes.card}
      onClick={() => {
        navigate(`/course/${data?.code}`);
      }}
    >
      <div className={classes.title}>{data?.name}</div>
      <div className={classes.infoSection}>
        <div className={classes.subjectRoom}>
          <div className={classes.subject}>
            <BookRounded style={{ width: 20 }} /> {data?.subject}
          </div>
          <div className={classes.room}>
            <MeetingRoomRounded style={{ width: 20 }} /> {data?.room}
          </div>
        </div>
        <div className={classes.lecturer}>
          <PersonRoundedIcon style={{ width: 20 }} /> {data?.lecturer?.name}
        </div>
      </div>
      <div className={classes.description}>{data?.description}</div>
    </div>
  );
};

export default Card;
