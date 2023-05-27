import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../Styles/TextField.scss';
import { textSizeFieldClassname } from '../Styles/TextFieldStyles';

interface TextFieldProps {
  value: string;
  placeholder: string;
  onChange?: (value: string) => void;
  size?: 'short' | 'long';
}

export default function TextField({
  value,
  placeholder,
  onChange,
  size,
}: TextFieldProps) {
  return (
    <div className={`TextField ${textSizeFieldClassname(size)}`}>
      <input
        value={value}
        placeholder={placeholder}
        type="text"
        onChange={(e) => onChange && onChange(e.target.value)}
      />
      <SearchIcon sx={{ fontSize: 37, color: '#d79e00' }} />
    </div>
  );
}
