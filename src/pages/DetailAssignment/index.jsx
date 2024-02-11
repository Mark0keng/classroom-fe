import { Grid, Menu, MenuItem } from '@mui/material';
import { MoreVertRounded } from '@mui/icons-material';

import classes from './style.module.scss';
import { useState } from 'react';

const DetailAssignment = () => {
  const [menuPosition, setMenuPosition] = useState(null);
  const menuOpen = Boolean(menuPosition);

  const handleClick = (event) => {
    setMenuPosition(event.currentTarget);
  };

  const handleClose = () => {
    setMenuPosition(null);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={7} lg={7} xl={9}>
        <div className={classes.card}>
          <div className={classes.header}>
            <div className={classes.title}>Tugas 1</div>
            <div className={classes.toolbar}>
              <div className={classes.iconBtn} onClick={handleClick}>
                <MoreVertRounded />
              </div>
              <Menu open={menuOpen} anchorEl={menuPosition} onClose={handleClose}>
                <MenuItem className={classes.item}>Edit</MenuItem>
                <MenuItem className={classes.item}>Delete</MenuItem>
              </Menu>
            </div>
          </div>
          <div className={classes.dueDate}>Due Feb 10, 2024</div>
          <hr />
          <div className={classes.instruction}>asdasdasdasd</div>
        </div>
      </Grid>
      <Grid item xs={12} md={5} lg={4} xl={3}>
        <div className={classes.card}>
          <div className={classes.submitSection}>
            <div>Your Work</div>
            <div className={classes.fileBox}>
              <div>Submit File Here</div>
              <input type="file" />
            </div>
            <div className={classes.submit}>Submit</div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default DetailAssignment;
