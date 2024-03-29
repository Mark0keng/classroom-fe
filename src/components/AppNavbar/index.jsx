/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTheme } from '@containers/App/actions';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import LibraryAddRoundedIcon from '@mui/icons-material/LibraryAddRounded';
import LogoutRounded from '@mui/icons-material/LogoutRounded';
import { setLogin, setToken } from '@containers/Client/actions';

import classes from './style.module.scss';

const AppNavbar = ({ title, locale, theme, profile }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuPosition, setMenuPosition] = useState(null);
  const [optionPosition, setOptionPosition] = useState(null);
  const menuOpen = Boolean(menuPosition);
  const optionOpen = Boolean(optionPosition);

  const handleClick = (event) => {
    setMenuPosition(event.currentTarget);
  };

  const handleClose = () => {
    setMenuPosition(null);
  };

  const handleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  const handleOption = (event) => {
    setOptionPosition(event.currentTarget);
  };

  const handleOptionClose = () => {
    setOptionPosition(null);
  };

  const handleLogout = () => {
    dispatch(setLogin(false));
    dispatch(setToken(null));
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.sidebar}>
        <div className={classes.burger} onClick={handleClick}>
          {!menuOpen ? <MenuRoundedIcon /> : <MenuOpenRoundedIcon />}
        </div>
        <Menu open={menuOpen} anchorEl={menuPosition} onClose={handleClose}>
          <MenuItem
            className={classes.item}
            onClick={() => {
              navigate('/course');
            }}
          >
            <DashboardRoundedIcon style={{ paddingRight: 8, width: 20 }} /> Courses
          </MenuItem>
          <MenuItem className={classes.item}>
            <SettingsRoundedIcon style={{ paddingRight: 8, width: 20 }} /> Setting
          </MenuItem>
          <MenuItem className={classes.item} onClick={handleLogout}>
            <LogoutRounded style={{ paddingRight: 8, width: 20 }} /> Logout
          </MenuItem>
        </Menu>
      </div>
      <div className={classes.toolbar}>
        <div className={classes.option} onClick={handleOption}>
          <AddRoundedIcon />
        </div>
        <Menu open={optionOpen} anchorEl={optionPosition} onClose={handleOptionClose}>
          {profile?.lecturer_id && (
            <MenuItem
              className={classes.item}
              onClick={() => {
                navigate('/create-course');
              }}
            >
              <LibraryAddRoundedIcon style={{ paddingRight: 8, width: 20 }} /> Create Class
            </MenuItem>
          )}

          {profile?.student_id && (
            <MenuItem
              className={classes.item}
              onClick={() => {
                navigate('/join-course');
              }}
            >
              <ExitToAppRoundedIcon style={{ paddingRight: 8, width: 20 }} /> Join Class
            </MenuItem>
          )}
        </Menu>

        <div className={classes.theme} onClick={handleTheme} data-testid="toggleTheme">
          {theme === 'light' ? <NightsStayRoundedIcon /> : <LightModeRoundedIcon />}
        </div>
      </div>
    </div>
  );
};

AppNavbar.propTypes = {
  title: PropTypes.string,
  locale: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

export default AppNavbar;
