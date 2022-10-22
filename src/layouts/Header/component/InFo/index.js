import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import style from './InFo.module.scss';
import { Theme } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(style);

function Info() {
    return (
        <div className={cx('header-right')}>
            <Tippy delay={[0, 50]} content="Chủ đề" placement="bottom">
                <div className={cx('circle')}>
                    <Theme />
                </div>
            </Tippy>
            <Tippy delay={[0, 50]} content="Nâng cấp VIP" placement="bottom">
                <div className={cx('circle', { none: true })}>
                    <span>
                        <i className="fa-regular fa-gem"></i>
                    </span>
                </div>
            </Tippy>
            <Tippy delay={[0, 50]} content="Tải lên" placement="bottom">
                <div className={cx('circle', { none: true })}>
                    <span>
                        <i className="fa-solid fa-upload"></i>
                    </span>
                </div>
            </Tippy>
            <Tippy delay={[0, 50]} content="Cài đặt" placement="bottom">
                <div className={cx('circle')}>
                    <span>
                        <i className="fa-solid fa-gear"></i>
                    </span>
                </div>
            </Tippy>
            <div className={cx('circle')}>
                <Image
                    className={cx('check-btn-img')}
                    src="https://s120-ava-talk-zmp3.zmdcdn.me/f/5/3/c/5/120/5ba63e0a984ccedcf575e1108ed95dc8.jpg"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Info;
