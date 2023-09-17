import PropTypes from 'prop-types';

const Link = ({ route }) => {
    return (
        <li className="mr-5">
            <a href={'rote.path'}>{route.name}</a>
        </li>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired,
}

export default Link;