import { FC } from 'react';
import { useHeaderContext } from '../../../context/HeaderContext';
import CloseMenu from '../../../assets/images/icons/menu-to-close-transition.svg?react';
import OpenMenu from '../../../assets/images/icons/close-to-menu-transition.svg?react';

const MenuIcon: FC = () => {
    const { click, handleClick } = useHeaderContext();

    return (
        <div className={`mobile-menu order-1 mlg:hidden`} onClick={handleClick}>
            {click ? <CloseMenu className='w-6 h-6' /> : <OpenMenu className='w-6 h-6' />}
        </div>
    );
};

export default MenuIcon;
