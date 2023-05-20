import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../Styles/TextField.scss';

interface TextFieldProps {
  value: string;
  placeholder: string;
  onChange?: (value: string) => void;
}

export default function TextField({
  value,
  placeholder,
  onChange,
}: TextFieldProps) {
  return (
    <div>
      <div className="TextField">
        <input
          value={value}
          placeholder={placeholder}
          type="text"
          onChange={(e) => onChange && onChange(e.target.value)}
        />
        <SearchIcon sx={{ fontSize: 37, color: '#d79e00' }} />
      </div>
      {/* {smallResultsOn ?? (
        <SearchedList filteredList={filteredList} smallResultsOn />
      )} */}
    </div>
  );
}

// const SearchedList = ({ filteredList, smallResultsOn }) => {
//   return (
//     <ul className={`SearchedList${smallResultsOn ? '-Small' : ''}`}>
//       {filteredList.map((obj) => (
//         <Link
//           to={`/profile/${obj}`}
//           state={{ writer: obj }}
//           style={{ textDecoration: 'none' }}
//         >
//           <li>
//             {obj}
//             <div className="slidingUnderline"></div>
//           </li>
//         </Link>
//       ))}
//     </ul>
//   );
// };
