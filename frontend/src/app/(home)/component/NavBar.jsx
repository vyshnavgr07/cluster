import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHouse, faMagnifyingGlass, faSave} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <div className='w-full flex justify-around border-b border-b-white  '>
      <FontAwesomeIcon icon={faHouse} className="text-white size-8" />
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white size-8" />
       <FontAwesomeIcon  icon={faHeart} className="text-white size-8"/> 
       <FontAwesomeIcon  icon={faSave} className="text-white size-8"/> 
    </div>
  );
};

export default NavBar;