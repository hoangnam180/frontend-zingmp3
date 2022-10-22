import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Footer from './Footer';
import Header from './Header';
import SideBar from './Sidebar';

const cx = classNames.bind(styles);
function LayoutDefault({ children }) {
    return (
        <div className={cx('wrapper')}>
            <SideBar />
            <div className={cx('content')}>
                <Header />
                {children}
            </div>
            <Footer />
        </div>
    );
}
LayoutDefault.propTypes = {
    children: PropTypes.node.isRequired,
};
export default LayoutDefault;
