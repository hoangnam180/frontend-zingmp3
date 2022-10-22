import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import style from './Control.module.scss';

const cx = classNames.bind(style);
function Control() {
    const navigate = useNavigate();
    return (
        <>
            <button
                small="true"
                className={cx('btn-header')}
                onClick={() => {
                    navigate(-1);
                }}
            >
                <i className="fa-solid fa-angle-left"></i>
            </button>
            <button
                small="true"
                className={cx('btn-header')}
                onClick={() => {
                    navigate(+1);
                }}
            >
                <i className="fa-solid fa-angle-right"></i>
            </button>
        </>
    );
}

export default Control;
