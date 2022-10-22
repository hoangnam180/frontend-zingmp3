import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss'

const cx = classNames.bind(styles);
function ItemRecommend({data,icon}) {
    return (  
        <li className={cx("suggest-song-item")}>
            <span className={cx("icon")}><i className={icon}></i></span>
            <span className={cx("suggest-song-prev")}>{data.keyword}</span>
        </li>
    );
}
ItemRecommend.propTypes = {
    data : PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
}
export default ItemRecommend;