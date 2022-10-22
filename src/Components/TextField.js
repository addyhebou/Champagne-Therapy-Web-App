import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../Styles/TextField.scss';

export default function TextField({ value, placeholder, onChange }) {
  return (
    <div className="TextField">
      <input
        value={value}
        placeholder={placeholder}
        type="text"
        onChange={(e) => onChange(e.target.value)}
      />
      <SearchIcon sx={{ fontSize: 37, color: '#d79e00' }} />
    </div>
  );
}
