import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import ItemPlay from '~/components/ItemPlay';
import { setCurrentIndex } from '~/redux/actions/audio';
import style from './PlaylistContent.module.scss';

const cx = classNames.bind(style);
function PlaylistContent({ active }) {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.audio.data);
    const handleClickItem = (encodeId, index) => {
        dispatch(setCurrentIndex(index));
    };
    return (
        <div className={cx('footer-playlist-content', { active: active })}>
            {data.map((item, index) => {
                return <ItemPlay key={item?.encodeId} data={item} index={index} handleOnClick={handleClickItem} />;
            })}
        </div>
    );
}
PlaylistContent.propTypes = {
    active: PropTypes.bool.isRequired,
};
export default PlaylistContent;
