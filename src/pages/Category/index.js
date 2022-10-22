import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '~/components/Loading';
import Playlist from '~/components/Playlist';
import * as categorySevices from '~/services/category.sevices';
import './Category.scss';

const Category = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleCategory = (encodeId) => {
        navigate(`/album/${encodeId}`);
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const result = await categorySevices.Category();
            setData(result);
            setLoading(false);
        };
        fetchData();
        return () => {
            setData([]);
        };
    }, []);
    const src = data && data?.banners?.length > 0 && data?.banners[1]?.cover;
    return (
        <>
            {!loading ? (
                <div className="category home">
                    <div className="category-banner">
                        <img src={`${src}`} alt="vip" />
                    </div>
                    {data &&
                        data?.genre?.length > 0 &&
                        data?.genre?.map((item, index) => {
                            return (
                                <Playlist
                                    key={index}
                                    title={item.title}
                                    data={item.playlists}
                                    wide={false}
                                    clickItem={handleCategory}
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

export default Category;
