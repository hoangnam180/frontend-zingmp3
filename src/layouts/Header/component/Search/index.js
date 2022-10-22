import classNames from 'classnames/bind';
import style from './Search.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineClear } from 'react-icons/md';
import { useState, useRef, useEffect } from 'react';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import useDebounce from '~/hooks/useDebounced';
import * as SearchServices from '~/services/search.sevices';

const cx = classNames.bind(style);
function Search() {
    const [keywords, setKeyWord] = useState('');
    const [active, setActive] = useState(false);
    const [valueResult, setValueResult] = useState([]);
    const [title, setTitle] = useState('');
    const searchRef = useRef();

    const debouncedValue = useDebounce(keywords, 300);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            SearchServices.searchRecommend().then((data) => {
                setTitle('Đề xuất cho bạn');
                setValueResult(data);
            });
            return;
        }

        const fetchApi = async () => {
            const result = await SearchServices.searchSuggestion(keywords);
            if (result) {
                setTitle('Từ khóa liên quan');
                setValueResult(result);
            }
        };

        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);

    return (
        <div className={cx('search')} ref={searchRef}>
            <button className={cx('icon-search')}>
                <AiOutlineSearch style={{ fontSize: '25px' }} />
            </button>
            <input
                value={keywords}
                onChange={(e) => setKeyWord(e.target.value)}
                className={cx('search-input', { active: active })}
                type="text"
                placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
                onFocus={() => {
                    setActive(!active);
                }}
                onBlur={() => {
                    setActive(!active);
                }}
            />
            {keywords && (
                <button className={cx('icon-close')} onClick={() => setKeyWord('')}>
                    <MdOutlineClear style={{ fontSize: '19px' }} />
                </button>
            )}
            <SuggestedAccounts active={active} data={valueResult} title={title} />
        </div>
    );
}

export default Search;
