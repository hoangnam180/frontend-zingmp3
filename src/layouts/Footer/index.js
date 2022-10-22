import classNames from 'classnames/bind';
import { useRef } from 'react';

import style from './Footer.module.scss';
import InfoAudio from './component/InfoAudio/infoAudio';
import ControlAudio from './component/ControlAudio';
import ControlRight from './component/ControlRight';

const cx = classNames.bind(style);

function Footer() {
    const audioPlayer = useRef();
    return (
        <div className={cx('footer')}>
            <InfoAudio />
            <ControlAudio audioPlayer={audioPlayer} />
            <ControlRight audioPlayer={audioPlayer} />
        </div>
    );
}

export default Footer;
