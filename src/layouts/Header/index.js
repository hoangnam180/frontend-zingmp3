import classNames from 'classnames/bind';

import style from './Header.module.scss';
import Search from './component/Search';
import Control from './component/Control';
import Info from './component/InFo';
import images from '~/assets/imgs';
import Image from '~/components/Image';

const cx = classNames.bind(style);

function Header() {
    return (
        <div className={cx('header')}>
            <div className={cx('header-logo')}>
                <Image src={images.logo2} alt="logo" />
            </div>
            <Control />
            <Search />
            <Info />
        </div>
    );
}

export default Header;
