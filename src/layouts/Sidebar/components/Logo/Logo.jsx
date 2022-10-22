import classNames from 'classnames/bind';
import styles from './Logo.module.scss';

import images from '~/assets/imgs';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function Logo() {
    return (
        <div className={cx('logo')}>
            <Image src={images.logo2} alt="logo" />
            <Image className={cx('logo2')} src={images.logo1} alt="logo" style={{ width: '30px' }} />
        </div>
    );
}

export default Logo;
