import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ScrollDownArrow({ scrollFunction }) {
  return (
    <div className="ScrollDownArrow" onClick={scrollFunction}>
      <ExpandMoreIcon sx={{ fontSize: 100, color: '#d79e00' }} />
    </div>
  );
}
