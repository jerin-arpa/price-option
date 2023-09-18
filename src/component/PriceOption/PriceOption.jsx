import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;

    return (
        <div className='my-3 bg-blue-100 rounded-lg p-5 flex flex-col'>
            <h2 className='text-3xl font-extrabold text-center mb-2'>
                <span>{price}</span>
                <span>/mon</span>
            </h2>

            <h4 className='text-2xl font-bold text-center mb-5'>{name}</h4>


            <div className='flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>

            <button className='mt-4 bg-blue-400 text-white w-full py-2 font-bold rounded-lg hover:bg-blue-800'>Buy Now</button>

        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired,
};

export default PriceOption;