import { useContext } from 'react';
import { FaLaptop, FaTableAlt, FaMobileAlt } from 'react-icons/fa';
import DataContext from './context/Data.Context';

const Header = ({ title}) => {
  const {width}=useContext(DataContext)
  return (
    <header className='Header'>
      <h1>{title}</h1>
      {width < 768 ? <FaMobileAlt />
        // : width < 992 ? <FaTableAlt />
          : <FaLaptop />}

    </header>
  )
}

export default Header