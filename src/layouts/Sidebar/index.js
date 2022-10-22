import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';

import Logo from './components/Logo/Logo';
import { default as config } from '~/config/routes';
import ListMain from './components/ListMain';
import images from '~/assets/imgs';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

const menuMain = [
    { title: 'Cá Nhân', path: config.my_music, icon: 'fa-solid fa-book' },
    { title: 'Khám Phá', path: config.home, icon: 'fa-solid fa-compact-disc' },
    { title: '#zingchart', path: config.zing_chart, icon: 'fa-solid fa-chart-simple' },
    { title: 'Radio', path: config.radio, icon: 'fa-solid fa-radio' },
    { title: 'Theo dõi', path: config.follow, icon: 'fa-solid fa-book' },
];
const menuScroll = [
    { title: 'Nhạc Mới', path: config.newmusic, icon: 'fa-solid fa-music' },
    { title: 'Thể Loại', path: config.category, icon: 'fa-solid fa-icons' },
    { title: 'Top 100', path: config.top100, icon: 'fa-solid fa-star' },
];
const menuLibrary = [
    { title: 'Thư Viện' },
    { title: 'Bài Hát', img: images.musics },
    { title: 'Playlist', img: images.playlist },
    { title: 'Gần Đây', img: images.history },
];

const menuMobile = [
    { title: 'Cá Nhân', path: config.my_music, icon: 'fa-solid fa-book' },
    { title: 'Khám Phá', path: config.home, icon: 'fa-solid fa-compact-disc' },
    { title: '#zingchart', path: config.zing_chart, icon: 'fa-solid fa-chart-simple' },
    { title: 'Nhạc Mới', path: config.newmusic, icon: 'fa-solid fa-music' },
    { title: 'Top 100', path: config.top100, icon: 'fa-solid fa-star' },
];

function SideBar() {
    return (
        <aside className={cx('sidebar')}>
            <Logo />
            <div className={cx('nav-tab')}>
                <div className={cx('nav-main')}>
                    <ListMain data={menuMain} />
                </div>
                <div className={cx('nav-divide')}></div>
                <div className={cx('nav-scroll')}>
                    <ListMain data={menuScroll} />
                    <div className={cx('nav-adv')}>
                        <span className={cx('nav__adv-title')}>Nghe nhạc không quảng cáo cùng kho nhạc VIP</span>
                        <button>NÂNG CẤP VIP</button>
                    </div>
                    <div className={cx('nav-library ')}>
                        <ListMain link={true} data={menuLibrary} />
                    </div>
                </div>
                <div className={cx('nav-new-playlist')}>
                    <i className="fa-solid fa-plus"></i>
                    <span className={cx('nav-title')}>Tạo playlist mới</span>
                </div>
            </div>
            <div className={cx('nav-mobile')}>
                <ul>
                    {menuMobile.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink
                                    className={(nav) => cx('nav-item-link', { active: nav.isActive })}
                                    to={item?.path ? item.path : '/404'}
                                >
                                    <div className={item.icon || item.img ? cx('flex itemcenter') : ''}>
                                        {item.img ? (
                                            <img
                                                src={item?.img}
                                                className={cx(`${item.img ? 'img' : 'not-img'}`)}
                                                alt="icon"
                                            />
                                        ) : (
                                            <span className={cx('nav-icon')}>
                                                <i className={item?.icon}></i>
                                            </span>
                                        )}
                                        <span className={cx('nav-title')}>{item?.title}</span>
                                    </div>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
}

export default SideBar;
