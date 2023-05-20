import { Link } from 'react-router-dom';
import '../../Styles/Buttons.scss';

export default function PrimaryBtn({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <button className="PrimaryBtn">{text}</button>;
    </Link>
  );
}
