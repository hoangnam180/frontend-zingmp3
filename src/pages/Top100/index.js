import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Playlist from '~/components/Playlist';
import './Top100.scss';
import * as topMusicServices from '~/services/topmusic.sevices';
import Loading from '~/components/Loading';
const TopMusic = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleTop100 = (encodeId) => {
        navigate(`/album/${encodeId}`);
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const result = await topMusicServices.TopMusic();
            setData(result);
            setLoading(false);
        };
        fetchData();
        return () => {
            setData([]);
            setLoading(false);
        };
    }, []);

    return (
        <>
            {!loading ? (
                <div className="topmusic home">
                    <div className="topmusic-banner">
                        <img src="https://mp3-react-vinhbuihd.vercel.app/images/b-top100.png" alt="top 100" />
                    </div>
                    {data &&
                        data?.length > 0 &&
                        data?.map((item, index) => {
                            return (
                                <Playlist
                                    key={index}
                                    title={item.title}
                                    data={item.items}
                                    wide={false}
                                    clickItem={handleTop100}
                                />
                            );
                        })}
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default TopMusic;
