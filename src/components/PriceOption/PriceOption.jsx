import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-blue-900 flex flex-col rounded-md p-6'>
            <h2 className='text-center'>
                <span className='text-5xl font-extrabold'>{price}</span>
            </h2>
            <h4 className='text-3xl text-center my-6'>{name}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, idx)=> <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className='bg-emerald-600 mt-12 w-full rounded-lg py-2 font-bold hover:bg-emerald-900 text-white'>Buy now</button>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object,
}
export default PriceOption;