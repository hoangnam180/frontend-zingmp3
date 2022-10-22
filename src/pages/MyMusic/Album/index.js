import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CardItem from '~/components/CardItem';
const Album = () => {
    const favoriteAlbum = useSelector((state) => state.audio.albumFavorite);
    const navigate = useNavigate();
    if (favoriteAlbum?.length === 0) {
        return (
            <div className="mymusic-song">
                <h2>Album Trống</h2>
            </div>
        );
    }
    const handleAlbumFavorite = (encodeId) => {
        navigate(`/album/${encodeId}`);
    };
    return (
        <div className="mymusic-song row">
            {favoriteAlbum.map((item, index) => (
                <div key={item.encodeId} className="col c-6 m-4 l-2-4">
                    <CardItem data={item} onClick={handleAlbumFavorite} />
                </div>
            ))}
        </div>
    );
};

export default Album;
