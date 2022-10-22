import { useRef } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import './MyMusic.css';
const MyMusic = () => {
    const refBorder = useRef();
    const menu = [
        {
            path: 'song',
            title: 'Bài hát yêu thích',
        },
        {
            path: 'album',
            title: 'Album',
        },
        {
            path: 'podcast',
            title: 'Podcast',
        },
    ];

    const handleClickTitle = (e) => {
        refBorder.current.style.width = e.target.offsetWidth + 'px';
        refBorder.current.style.left = e.target.offsetLeft + 'px';
    };

    const location = useLocation();
    const path = location.pathname.split('/').pop();
    useEffect(() => {
        document.title = 'Nhạc cá nhân | Xem bài hát, Album';
        if (menu.find((item) => item.path === path)) {
            refBorder.current.style.width = document.querySelector(`.${path}`)?.offsetWidth + 'px';
            refBorder.current.style.left = document.querySelector(`.${path}`)?.offsetLeft + 'px';
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path]);
    // console.log(document.querySelector(`.${path}`).offsetLeft);
    return (
        <div className="mymusic home">
            <h2 className="">Thư Viện</h2>
            <div className="mymusic-title-group">
                <ul>
                    {menu.map((item) => (
                        <li key={item.path}>
                            <Link className={item.path} onClick={handleClickTitle} to={`${item.path}`}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div ref={refBorder} className="mymusic-title-border"></div>
            </div>
            <Outlet />
        </div>
    );
};

export default MyMusic;
