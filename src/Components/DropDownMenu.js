  import react, { useState } from 'React';
  import { HiPencilAlt } from 'react-icons/fh';
  import { FaTrash } from 'react-icons/fa';
  import { BiDotsVerticalRounded } from 'react-icons/bi';

  import './style.css';

  const DropdownMenu = () => {
    const [dropDownActive, setDropDownActive] = useState(false);
  
      return (
        <div className="dropdown-menu" tabIndex="0" onBlur={setDropDownActive(false)}>
          <div className={`toggle ${dropDownActive ? 'active' : ''}`} onClick={setDropDownActive(!dropDownActive)}>
            <span> <BiDotsVerticalRounded /> </span>
          </div>

          <div className={`menu ${dropDownActive ? 'expanded' : 'collapsed'}`}>
            <ul>
                <li key='1'>
                  <span>  <FaTrash />  </span>
                  <span className="label"> Edit </span>
                </li>

                <li key='2'>
                  <span>  <HiPencilAlt /> </span>
                  <span className="label"> Delete </span>
                </li>
            </ul>
          </div>
        </div>
      );
};

export default DropdownMenu;
