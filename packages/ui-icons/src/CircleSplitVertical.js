import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const CircleSplitVertical = props => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <circle cx="32" cy="32" r="24"/><path d="M32 8v48"/>
  </SvgIcon>
);

export default CircleSplitVertical;
