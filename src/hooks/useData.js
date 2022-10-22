import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentIndex } from '~/redux/actions/audio';
import * as songSevices from '~/services/song.sevices';

function useData(value = '') {
    const dispatch = useDispatch();
    const [data, setData] = useState({});
    const currentIndex = useSelector((state) => state.audio.currentIndex);
    useEffect(() => {
        const fetchData = async () => {
            if (!value) return;
            const [infoSong, song] = await Promise.all([songSevices.infoSong(value), songSevices.song(value)]);
            if (infoSong && song?.hasOwnProperty(128)) {
                const newResult = { ...infoSong, url: song[128] };
                setData(newResult);
            } else {
                alert('Bài hát này hiện không khả dụng');
                dispatch(setCurrentIndex(currentIndex + 1));
            }
        };
        fetchData();
    }, [value, dispatch, currentIndex]);

    return data;
}

export default useData;
