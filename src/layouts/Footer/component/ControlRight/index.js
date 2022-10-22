import classNames from 'classnames/bind';
import { useState } from 'react';
import PropTypes from 'prop-types';

import style from '~/layouts/Footer/Footer.module.scss';
import PlaylistContent from '../PlaylistContent';

const cx = classNames.bind(style);

function ControlRight({ audioPlayer }) {
    const [shutdown, setShutDown] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState(0.7);

    const handleOnVolume = (e) => {
        setValue(e.target.value / 100);
        if (!shutdown) {
            audioPlayer.current.volume = value;
        }
    };

    const handleShutdown = () => {
        setShutDown(!shutdown);
        if (!shutdown) {
            audioPlayer.current.volume = 0;
        } else {
            audioPlayer.current.volume = value;
        }
    };
    return (
        <div className={cx('footer-right')}>
            <div className={cx('controls')}>
                <span className={cx('btn__control', { none: true })}>
                    <i className="fa-solid fa-microphone"></i>
                </span>
                <span className={cx('btn__control', { volumn: true, none: true })} onClick={handleShutdown}>
                    {!shutdown ? (
                        <i className="fa-solid fa-volume-high"></i>
                    ) : (
                        <i className="fa-solid fa-volume-xmark"></i>
                    )}
                </span>
                <input
                    id="rangeSliderVolume"
                    className={cx('volume')}
                    type="range"
                    min="0"
                    max="100"
                    onChange={handleOnVolume}
                    defaultValue={70}
                />
                <div className={cx('footer-playlist')} onClick={() => setIsActive(!isActive)}>
                    <span>
                        <i className="fa-solid fa-list"></i>
                    </span>
                </div>
            </div>
            <PlaylistContent active={isActive} />
        </div>
    );
}

ControlRight.propTypes = {
    audioPlayer: PropTypes.any,
};
export default ControlRight;
