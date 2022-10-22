import { BsPlayCircle, BsThreeDots } from 'react-icons/bs';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Playlist.module.scss';
import './CardList.css';
import Image from '../Image';
import { setAlbumFavorite } from '~/redux/actions/audio';
const cx = classNames.bind(styles);
const CardItem = ({ data, onClick = () => {}, card = true, like }) => {
    const dispatch = useDispatch();
    const albumFavorite = useSelector((state) => state.audio.albumFavorite);
    return (
        <div className="card-list">
            <div className={`card-list-image ${data?.isHeart ? 'heart' : ''}`}>
                <Image src={data?.thumbnailM} alt="thumbnail" />

                <div className="card-list-image-hover">
                    <>
                        {data?.isHeart ? (
                            <AiFillHeart
                                className="card-list-icon small"
                                color=" #7200a1"
                                onClick={() => {
                                    //handle albumFavorite
                                    const newFavorite = albumFavorite.filter(
                                        (item) => item.encodeId !== data?.encodeId,
                                    );
                                    dispatch(setAlbumFavorite(newFavorite));
                                }}
                            />
                        ) : (
                            <AiOutlineHeart className="card-list-icon small" />
                        )}
                    </>
                    <BsPlayCircle className="card-list-icon big" onClick={() => onClick(data?.encodeId, data?.id)} />
                    <BsThreeDots className="card-list-icon small" />
                </div>

                <div className="card-list-duration">{data.duration}</div>
            </div>
            {card && (
                <>
                    <h3 className={cx('card-name')} onClick={() => onClick(data?.encodeId, data?.id)}>
                        {data?.title}
                    </h3>
                    <h5 className={cx('card-singer')}>
                        {data?.sortDescription ? data?.sortDescription : data?.artistsNames}
                    </h5>
                </>
            )}
        </div>
    );
};
CardItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
    card: PropTypes.bool,
};
export default CardItem;
