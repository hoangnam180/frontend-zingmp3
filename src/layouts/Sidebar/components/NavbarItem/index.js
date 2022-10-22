import { NavLink, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './NavbarItem.module.scss';
import Image from '~/components/Image';
import { BsPlayCircle } from 'react-icons/bs';
const cx = classNames.bind(styles);

function NavbarItem({ data, link }) {
    return (
        <li className={cx('nav-item')}>
            {link ? (
                <Link className={cx('nav-item-link')} to={data?.path ? data.path : '/404'}>
                    <div className={data.icon || data.img ? cx('flex itemcenter') : ''}>
                        {data.img ? (
                            <Image src={data?.img} className={cx(`${data.img ? 'img' : 'not-img'}`)} alt="icon" />
                        ) : (
                            <span className={cx('nav-icon')}>
                                <i className={data?.icon}></i>
                            </span>
                        )}
                        <span className={cx('nav-title')}>{data?.title}</span>
                    </div>
                    <span className={cx('icon-hover')}>
                        <BsPlayCircle className="card-list-icon" style={{ fontSize: '30px', marginRight: '15px' }} />
                    </span>
                </Link>
            ) : (
                <NavLink
                    className={(nav) => cx('nav-item-link', { active: nav.isActive })}
                    to={data?.path ? data.path : '/404'}
                >
                    <div className={data.icon || data.img ? cx('flex itemcenter') : ''}>
                        {data.img ? (
                            <Image src={data?.img} className={cx(`${data.img ? 'img' : 'not-img'}`)} alt="icon" />
                        ) : (
                            <span className={cx('nav-icon')}>
                                <i className={data?.icon}></i>
                            </span>
                        )}
                        <span className={cx('nav-title')}>{data?.title}</span>
                    </div>
                    <div className={cx('icon-hover')}>
                        <BsPlayCircle className="card-list-icon" style={{ fontSize: '30px', marginRight: '15px' }} />
                    </div>
                </NavLink>
            )}
        </li>
    );
}
NavbarItem.propTypes = {
    data: PropTypes.object.isRequired,
    link: PropTypes.bool,
};
export default NavbarItem;
