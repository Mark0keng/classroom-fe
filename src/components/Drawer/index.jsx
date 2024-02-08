/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { Avatar, Box } from '@mui/material';

import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { setLogin, setToken } from '@containers/Client/actions';

import { createStructuredSelector } from 'reselect';
import { selectProfile } from '@containers/Client/selectors';
import { useNavigate } from 'react-router-dom';

import classes from './style.module.scss';
import { selectActive } from './selector';
import { setActive } from './actions';

const Drawer = ({ profile, active }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelect = (data) => {
    dispatch(setActive(data));
  };

  const handleLogout = () => {
    dispatch(setLogin(false));
    dispatch(setToken(null));
  };

  return (
    <Box className={classes.drawer} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
      <div className={classes.user}>
        <Avatar alt="Remy Sharp" src="" sx={{ marginBottom: 2 }} />
        <p className={classes.name}>{profile.name}</p>
        <p className={classes.major}>
          {profile.role == 1 && 'Student'}
          {profile.role == 2 && 'Lecturer'}
        </p>
      </div>

      <div className={classes.menu}>
        <div
          className={active === 'dashboard' ? classes.itemActive : classes.item}
          onClick={() => {
            handleSelect('dashboard');
            navigate('/course');
          }}
        >
          <DashboardRoundedIcon />
          Courses
        </div>
        <div className={classes.item}>
          <SettingsRoundedIcon />
          Setting
        </div>
        <div className={classes.item} onClick={handleLogout}>
          <LogoutRoundedIcon />
          Logout
        </div>
      </div>
    </Box>
  );
};

Drawer.propTypes = {
  profile: PropTypes.any,
  active: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  profile: selectProfile,
  active: selectActive,
});

export default connect(mapStateToProps)(Drawer);
