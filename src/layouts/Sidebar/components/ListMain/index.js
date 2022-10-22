import PropTypes from 'prop-types';
import NavbarItem from '../NavbarItem';

function ListMain({ data, link }) {
    return (
        <ul>
            {data &&
                data.map((item, index) => {
                    return <NavbarItem link={link} key={index} data={item} />;
                })}
        </ul>
    );
}
ListMain.propTypes = {
    data: PropTypes.array.isRequired,
    link: PropTypes.bool,
};
export default ListMain;
