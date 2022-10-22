import classNames from 'classnames/bind';
import { BsThreeDots, BsPlayCircle } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import './PlayItem.css';
import style from './Playlist.module.scss';
import Image from '../Image';
import { setAlbumFavorite } from '~/redux/actions/audio';

const cx = classNames.bind(style);

const PlayItem = ({ data, index, resultData, setResultData, onClick = () => {} }) => {
    const dispatch = useDispatch();
    const albumFavorite = useSelector((state) => state.audio.albumFavorite);
    return (
        <div className="card-list">
            <div className="card-list-image">
                <Image src={data?.thumbnailM} alt="thumbnail" />
                <div className="card-list-image-hover">
                    <>
                        {data.isHeart ? (
                            <AiFillHeart
                                className="card-list-icon small"
                                color={'#7200a1'}
                                onClick={() => {
                                    // handle Heart
                                    const newData = [...resultData];
                                    newData[index].isHeart = false;
                                    setResultData(newData);
                                    //handle albumFavorite
                                    const newFavorite = albumFavorite.filter(
                                        (item) => item.encodeId !== data?.encodeId,
                                    );
                                    dispatch(setAlbumFavorite(newFavorite));
                                }}
                            />
                        ) : (
                            <AiOutlineHeart
                                className="card-list-icon small"
                                onClick={() => {
                                    if (resultData[index].isHeart === false) {
                                        // handle Heart
                                        const newData = [...resultData];
                                        newData[index].isHeart = true;
                                        setResultData(newData);
                                        //handle albumFavorite
                                        if (albumFavorite.some((e) => e?.encodeId === data?.encodeId)) {
                                            alert('Album này đã được thêm vào yêu thích');
                                            return;
                                        } else {
                                            dispatch(setAlbumFavorite([...albumFavorite, { ...data, isHeart: true }]));
                                        }
                                    }
                                }}
                            />
                        )}
                    </>
                    <BsPlayCircle className="card-list-icon big" onClick={() => onClick(data?.encodeId, data?.id)} />
                    <BsThreeDots className="card-list-icon small" />
                </div>
                <div className="card-list-duration">{data.duration}</div>
            </div>
            <h3 className={cx('card-name')} onClick={() => onClick(data?.encodeId, data?.id)}>
                {data?.title}
            </h3>
            <h5 className={cx('card-singer')}>{data?.sortDescription ? data?.sortDescription : data?.artistsNames}</h5>
        </div>
    );
};

PlayItem.propTypes = {
    data: PropTypes.object,
};
export default PlayItem;
