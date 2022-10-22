import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Image from '../Image';

import style from './CardHozon.module.scss';

const cx = classNames.bind(style);

function CardHozon({ data, index }) {
    return (
        <div className={cx('card-hozon')}>
            <div className={cx('img')}>
                <Image src={data?.album?.thumbnail} alt="thumbnail" />
            </div>
            <div className={cx('about')}>
                <div>
                    <span className={cx('title')}>{data?.title}</span>
                    <span className={cx('author')}>{data?.album?.artistsNames}</span>
                </div>
                <div className={cx('sub')}>
                    <h2 className={cx('top')}>#{index + 1}</h2>
                    <span className={cx('time')}>{data?.album?.releaseDate}</span>
                </div>
            </div>
        </div>
    );
}
CardHozon.propTypes = {
    data: PropTypes.object.isRequired,
    index: PropTypes.number,
};
export default CardHozon;
