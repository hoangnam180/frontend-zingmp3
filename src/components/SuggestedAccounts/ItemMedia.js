import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function ItemRecommend({ data, onClick = () => {} }) {
    return (
        <li className={cx('info')}>
            <div className={cx('media-left')}>
                <Image src={data.avatar ? data.avatar : data.thumb} />
            </div>
            <div className={cx('media')} onClick={() => onClick(data?.id)}>
                <h4 className={cx('title')}>{data?.name ? data?.name : data?.title}</h4>
                <div className={cx('sub-title')}>
                    {data?.name && data?.followers ? (
                        <>
                            <span>Nghệ sĩ</span>
                            <span>•</span>
                            <span>{data.followers}K quan tâm</span>
                        </>
                    ) : (
                        <>
                            <span>{data && data?.artists?.length > 0 && data?.artists[0]?.name}</span>
                        </>
                    )}
                </div>
            </div>
        </li>
    );
}
ItemRecommend.propTypes = {
    data: PropTypes.object,
};
export default ItemRecommend;
