import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../Styles/TextField.scss';

export default function TextField({ placeholder }) {
  return (
    <div className="TextField">
      <input placeholder={placeholder} type="text" />
      <SearchIcon sx={{ fontSize: 37, color: '#d79e00' }} />
    </div>
  );
}
