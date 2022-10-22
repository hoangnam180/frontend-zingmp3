import Image from '~/components/Image';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import style from './Info.module.scss';

const cx = classNames.bind(style);

function InfoAudio() {
    const currentSong = useSelector((state) => state.audio.currentSong);
    const isPlay = useSelector((state) => state.audio.isPlaying);
    return (
        <>
            {currentSong &&
            Object.keys(currentSong).length === 0 &&
            Object.getPrototypeOf(currentSong) === Object.prototype ? (
                <div className={cx('footer-left')}>
                    <div className={cx('footer-info')}>
                        <h3 className={cx('footer-info-title')}>Mời bạn chọn bài hát</h3>
                    </div>
                </div>
            ) : (
                <div className={cx('footer-left')}>
                    <div className={cx('footer-img')}>
                        <Image src={currentSong?.thumbnailM} alt="info" />
                        <div className={cx('footer-img-play', { active: isPlay })}></div>
                    </div>
                    <div className={cx('footer-info')}>
                        <h3 className={cx('footer-info-title')}>{currentSong?.title}</h3>
                        <span className={cx('footer-info-singer')}>{currentSong?.artistsNames}</span>
                    </div>
                    <div className={cx('footer-like')}>
                        <input name="check-heart" type="checkbox" hidden />
                        <span className={cx('btn-like')}>
                            <i className="fa-regular fa-heart"></i>
                        </span>
                        <span className={cx('btn-like')}>
                            <i className="fa-solid fa-heart"></i>
                        </span>
                        <div className={cx('footer-more')}>
                            <i className="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default InfoAudio;
