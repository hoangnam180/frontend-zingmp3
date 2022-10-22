import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import style from './PlaylistContent.module.scss';
import { formatTime } from '~/utils/formatTime';
import Image from '../Image';

const cx = classNames.bind(style);

function ItemPlay({ data, index, duration, border = true, handleOnClick = () => {} }) {
    const currentIndex = useSelector((state) => state.audio.currentIndex);
    const dataRedux = useSelector((state) => state.audio.data);
    return (
        <div
            className={cx('list-album-item', {
                active: data?.encodeId === dataRedux[currentIndex]?.encodeId && index === currentIndex,
                border: border,
            })}
            onClick={() => handleOnClick(data?.encodeId, index)}
        >
            <div className={cx('list-album-song-name', { 'song-album-item': true })}>
                <div className="flex itemcenter">
                    <span className={cx('list-album-header-icon')}>{/* <i className="ti-music-alt"></i> */}</span>
                    <Image className={cx('song-album-item-img')} src={data?.thumbnailM} alt="info" />
                </div>
                <div className={cx('detail')}>
                    <div className={cx('detail-title')}>
                        <span className={cx('detail-title-name')}>{data?.title}</span>
                    </div>
                    <span className={cx('detail-artist')}>{data?.artistsNames}</span>
                </div>
            </div>
            {duration && (
                <>
                    <div className={cx('detail', { duration })}>
                        <span className={cx('detail-artist')}>{data?.album?.title}</span>
                    </div>
                    <div className={cx('detail', { duration })}>
                        <span className={cx('detail-artist', { time: true })}>{formatTime(data?.duration)}</span>
                    </div>
                </>
            )}
        </div>
    );
}
ItemPlay.propTypes = {
    data: PropTypes.object,
    index: PropTypes.number,
    border: PropTypes.bool,
    duration: PropTypes.bool,
    handleOnClick: PropTypes.func,
};
export default ItemPlay;
