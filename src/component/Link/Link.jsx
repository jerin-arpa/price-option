import PropTypes from 'prop-types';

const Link = ({ route }) => {
    return (
        <li className="mx-2 py-2 px-4 hover:bg-slate-300 hover:rounded-xl">
            <a href={'rote.path'}>{route.name}</a>
        </li>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired,
}

export default Link;