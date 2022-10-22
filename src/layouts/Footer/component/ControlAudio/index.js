import classNames from 'classnames/bind';
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsPlay, setCurrentIndex, setIsRepeat, setIsRandom, setCurrentSong } from '~/redux/actions/audio';
import PropTypes from 'prop-types';

import style from '~/layouts/Footer/Footer.module.scss';
import { formatTime } from '~/utils/formatTime';
import Control from './component/Control';
import useData from '~/hooks/useData';

const cx = classNames.bind(style);

function ControlAudio({ audioPlayer }) {
    // Ref element
    const inputRef = useRef();
    const timeRef = useRef();

    // State global
    const isPlay = useSelector((state) => state.audio.isPlaying);
    const data = useSelector((state) => state.audio.data);
    const currentIndex = useSelector((state) => state.audio.currentIndex);
    const currentSong = useSelector((state) => state.audio.currentSong);
    const isRepeat = useSelector((state) => state.audio.isRepeat);
    const isRandom = useSelector((state) => state.audio.isRandom);
    const dataSong = useData(data[currentIndex]?.encodeId);
    // state local
    const [time, setTime] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentSong(dataSong));
    }, [dispatch, dataSong]);

    //resetElement
    const resetEventSong = () => {
        inputRef.current.style.backgroundSize = `0% 100%`;
        inputRef.current.value = 0;
        setTime(audioPlayer.current.duration);
        timeRef.current.innerText = formatTime(0);
    };

    // handle play
    const handlePlay = () => {
        dispatch(setIsPlay(!isPlay));
        if (!isPlay) {
            audioPlayer.current.play();
        } else {
            audioPlayer.current.pause();
        }
    };

    //   handle Update
    const handleOnupdate = (e) => {
        const sumTime = e.target.duration;
        const currentTime = e.target.currentTime;
        let percent = Math.floor((currentTime / sumTime) * 100);
        if (percent) {
            inputRef.current.value = percent;
            inputRef.current.style.backgroundSize = `${percent}% 100%`;
        }
        timeRef.current.innerText = formatTime(currentTime);

        if (audioPlayer.current.played.length === 0 && isPlay) {
            audioPlayer.current.play();
        }
    };

    // next_song
    const handleNextSong = (type) => {
        if (isRandom) {
            playRandomSong();
        } else {
            if (currentIndex >= data.length - 1) {
                dispatch(setCurrentIndex(0));
                if (type === 'ended') {
                    dispatch(setIsPlay(false));
                    resetEventSong();
                }
            } else {
                dispatch(setCurrentIndex(currentIndex + 1));
            }
        }
    };

    //prev_song
    const handlePrevSong = () => {
        if (isRandom) {
            playRandomSong();
        } else {
            if (currentIndex <= 0) {
                dispatch(setCurrentIndex(data.length - 1));
            } else {
                dispatch(setCurrentIndex(currentIndex - 1));
            }
        }
    };

    //handleRepeated
    const handleRepeat = () => {
        dispatch(setIsRepeat(!isRepeat));
    };

    // handleRandom

    const playRandomSong = () => {
        let newIndex = currentIndex;
        while (newIndex === currentIndex) {
            newIndex = Math.floor(Math.random() * data.length);
        }
        dispatch(setCurrentIndex(newIndex));
    };

    // handleRandom
    const handleRandom = () => {
        dispatch(setIsRandom(!isRandom));
    };

    //handleOnEnded
    const handleOnEnded = () => {
        if (isRepeat) {
            audioPlayer.current.play();
        } else if (isRandom) {
            playRandomSong();
        } else {
            handleNextSong('ended');
        }
        resetEventSong();
    };

    // progress
    const handleOnInput = (e) => {
        const percent = e.target.value;
        const sumTime = audioPlayer.current.duration;
        const result = (sumTime / 100) * percent;
        audioPlayer.current.currentTime = result;
    };

    return (
        <div className={cx('footer__control')}>
            <Control
                handleNextSong={handleNextSong}
                handlePrevSong={handlePrevSong}
                handlePlay={handlePlay}
                handleRandom={handleRandom}
                handleRepeat={handleRepeat}
                isPlay={isPlay}
                isRandom={isRandom}
                isRepeat={isRepeat}
            />

            {/* Range */}
            <div className={cx('range')}>
                <span className={cx('time')} ref={timeRef}>
                    00:00
                </span>
                <input
                    id="rangeSlider"
                    className={cx('rangeSlider')}
                    defaultValue={0}
                    ref={inputRef}
                    type="range"
                    min="0"
                    max="100"
                    onInput={handleOnInput}
                />
                <span className={cx('totalTime')}>{formatTime(time) ? formatTime(time) : '00:00'}</span>

                {/* audio */}
                <audio
                    id="audio"
                    src={currentSong?.url}
                    ref={audioPlayer}
                    onTimeUpdate={handleOnupdate}
                    onEnded={handleOnEnded}
                    onLoadedMetadata={resetEventSong}
                ></audio>
            </div>
        </div>
    );
}
ControlAudio.propTypes = {
    audioPlayer: PropTypes.any,
};
export default React.memo(ControlAudio);
