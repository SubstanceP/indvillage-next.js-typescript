import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { relativeTimeThreshold } from 'moment';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles({
  root: {
    width: null,
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction href="https://www.instagram.com/indvillagerockford/" target="blank" label="rc insta" icon={<InstagramIcon />} />
      <BottomNavigationAction href="https://www.facebook.com/indvillagerockford" target="blank" label="rc fb" icon={<FacebookIcon />} />
      <BottomNavigationAction href="https://www.instagram.com/indvillagenaperville/" target="blank" label="nc insta" icon={<InstagramIcon />} />
      <BottomNavigationAction href="https://www.facebook.com/indvillage" target="blank" label="nc fb" icon={<FacebookIcon />} />

    </BottomNavigation>
  );
}
function right(arg0: { root: { width: number; }; footerbar: any; }, arg1: number, right: any) {
    throw new Error('Function not implemented.');
}

