import { useSelector } from 'react-redux';

import ItemPlay from '~/components/ItemPlay';
import './Song.css';

const Song = () => {
    const favoriteSong = useSelector((state) => state.audio.songFavorite);
    console.log(favoriteSong);
    if (favoriteSong?.length === 0) {
        return (
            <div className="mymusic-song">
                <h2>Thư viện trống</h2>
            </div>
        );
    }

    return (
        <div className="mymusic-song">
            song item
            {favoriteSong.map((song) => (
                <ItemPlay key={song.id} data={song} />
            ))}
        </div>
    );
};

export default Song;
