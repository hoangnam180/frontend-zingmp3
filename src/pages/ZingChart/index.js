import { useState, useEffect } from 'react';
import { AiOutlineLine } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

import './Zingchart.scss';
import LineChart from '~/components/LineChart';
import * as chartSevices from '~/services/chart.sevices';
import ItemPlay from '~/components/ItemPlay';
import { setCurrentIndex, setData as setDataRedux } from '~/redux/actions/audio';
import Loading from '~/components/Loading';
function ZingChar() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(false);
    const [perPage, setPerPage] = useState(9);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const result = await chartSevices.chartHome();
            setData(result);
            setLoading(false);
        };
        fetchData();
        return () => {
            setData([]);
            setLoading(false);
            setPage(false);
            setPerPage(9);
        };
    }, []);

    const label = data?.RTChart?.chart?.times?.map((item) => {
        return `${item?.hour}`;
    });

    const dataCounter =
        data?.RTChart?.chart?.items &&
        Object.values(data?.RTChart?.chart?.items).map((item) =>
            item?.map((item) => {
                return item?.counter;
            }),
        );

    const dataChart =
        data?.RTChart?.items &&
        // eslint-disable-next-line array-callback-return
        data?.RTChart?.items.map((item, index) => {
            if (index <= 2 && dataCounter) {
                return { label: item?.title, data: dataCounter[index] };
            }
        });

    const handleClickItem = (encodeId, index) => {
        dispatch(setCurrentIndex(index));
        dispatch(setDataRedux(data?.RTChart?.items));
    };

    const handleMore = (type) => {
        if (type === 'more') {
            setPerPage(data?.RTChart?.items?.length);
            setPage(true);
        } else {
            setPage(false);
            setPerPage(9);
        }
    };
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="zing-chart home">
                    <div className="align-items-center d-flex">
                        <h3 className="zing-chart-heading">#zingchart</h3>
                        <div className="zing-chart-play-icon">
                            <BsFillPlayFill />
                        </div>
                    </div>

                    <div className="chart" style={{ height: '400px' }}>
                        <LineChart label={label} dataChart={dataChart} />
                    </div>

                    <div className="zing-chart-playlist">
                        {data?.RTChart?.items &&
                            data?.RTChart?.items.map(
                                (item, index) =>
                                    index <= perPage && (
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
                                    ),
                            )}
                        <div className="button-more">
                            {!page ? (
                                <h3 onClick={() => handleMore('more')}>Xem Top 100</h3>
                            ) : (
                                <h3 onClick={handleMore}>Thu Gọn</h3>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ZingChar;
