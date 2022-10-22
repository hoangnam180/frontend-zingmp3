import { useState, useEffect } from 'react';
import { AiOutlineLine } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

import './Newmusic.scss';
import * as chartSevices from '~/services/chart.sevices';
import ItemPlay from '~/components/ItemPlay';
import { setCurrentIndex, setData as setDataRedux } from '~/redux/actions/audio';
import Loading from '~/components/Loading';

function NewMusic() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const result = await chartSevices.newReleaseChart();
            setData(result?.items);
            setLoading(false);
        };
        fetchData();
        return () => {
            setLoading(false);
            setData([]);
        };
    }, []);

    const handleClickItem = (encodeId) => {
        dispatch(setDataRedux(data));
        const indexFind = data.findIndex((item) => item.encodeId === encodeId);
        dispatch(setCurrentIndex(indexFind));
    };

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="zing-chart home">
                    <div className="align-items-center d-flex">
                        <h3 className="zing-chart-heading">Mới Phát Hành</h3>
                        <div className="zing-chart-play-icon">
                            <BsFillPlayFill />
                        </div>
                    </div>

                    <div className="zing-chart-playlist">
                        {data &&
                            data?.map((item, index) => (
                                <div className="playlist-item d-flex align-items-center" key={item.encodeId}>
                                    <div className={`playlist-position top-${index + 1}`}>{index + 1}</div>
                                    <div className="playlist-line">
                                        <AiOutlineLine />
                                    </div>
                                    <ItemPlay
                                        data={item}
                                        border={false}
                                        duration={true}
                                        handleOnClick={handleClickItem}
                                        index={index}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default NewMusic;
