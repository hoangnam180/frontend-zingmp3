import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import SliderWrap from '../SliderWrap';

import style from './Playlist.module.scss';

const cx = classNames.bind(style);

function Playlist({ title, data, type, wide = true, clickItem = () => {} }) {
    return (
        <div className={cx('playlist', { grid: true, wide: wide })}>
            <h2 className={cx('page-title')}>{title}</h2>
            <div className="row no-wrap ">
                <SliderWrap type={type ? type : false} data={data} onClick={clickItem} wide={wide} />
            </div>
        </div>
    );
}

Playlist.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
    type: PropTypes.bool,
    clickItem: PropTypes.func,
};
export default Playlist;
