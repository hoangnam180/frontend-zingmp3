import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { setCurrentIndex, setData } from '~/redux/actions/audio';
import style from './ListSong.module.scss';
import ItemInFo from '~/components/ItemInFo';

const cx = classNames.bind(style);
function ListSong({ title, data }) {
    const [tab, setTab] = useState('song');

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handlePlaylist = (index, id) => {
        if (tab === 'song') {
            dispatch(setData(data['song']));
            dispatch(setCurrentIndex(index));
        } else {
            navigate(`/album/${id}`);
        }
    };

    return (
        <div className="grid wide">
            <h2 className={cx('page-title')}>{title}</h2>
            <div className={cx('genre-select')}>
                <div>
                    <button className={cx('button', { active: tab === 'song' })} onClick={() => setTab('song')}>
                        Bài hát
                    </button>
                    <button className={cx('button', { active: tab === 'album' })} onClick={() => setTab('album')}>
                        Album
                    </button>
                </div>
                <p className={cx('discovery-btn')}>
                    Tất cả <i className="fa-solid fa-chevron-right"></i>
                </p>
            </div>
            <div className="row">
                {data[tab].map(
                    (item, index) =>
                        index < 12 && (
                            <div
                                onClick={() => {
                                    handlePlaylist(index, item?.encodeId);
                                }}
                                key={item.encodeId}
                                className="col c-6 l-4 l-2-4"
                            >
                                <ItemInFo key={item?.encodeId} data={item} index={index} />
                            </div>
                        ),
                )}
            </div>
        </div>
    );
}

ListSong.propTypes = {
    title: PropTypes.string,
    data: PropTypes.object,
};
export default ListSong;
