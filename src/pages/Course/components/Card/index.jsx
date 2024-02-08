/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import classes from './style.module.scss';

const Card = ({ data, lecturer }) => {
  const navigate = useNavigate();

  return (
    <div
      className={classes.card}
      onClick={() => {
        navigate(`/course/${data?.code}`);
      }}
    >
      <div className={classes.title}>{data?.name}</div>
      <div className={classes.info}>
        <PersonRoundedIcon style={{ width: 20 }} /> {lecturer}
      </div>
      <div className={classes.description}>{data?.description}</div>
    </div>
  );
};

export default Card;
