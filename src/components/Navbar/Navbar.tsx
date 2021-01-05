import React, { FC } from 'react';
import { ReactComponent as NASA } from '../../assets/ui/nasa.svg';
import Input from '../Input/Input';
import './Navbar.scss';

interface Props {
  date?: string;
  setDate?: (date: string) => void;
  onIconClick?: () => void;
}

const Navbar: FC<Props> = (props: Props) => {
  const { date, setDate, onIconClick } = props;

  return (
    <div className="Navbar--container">
      <div className="Navbar--icon Navbar--nasa">
        <NASA onClick={onIconClick} />
      </div>
      <div className="Navbar--search">
        <Input value={date} placeholder="Enter Date" onChange={setDate} />
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  date: '',
  setDate: () => {},
  onIconClick: () => {},
};

export default Navbar;
