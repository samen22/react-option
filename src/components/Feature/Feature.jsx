import PropTypes from 'prop-types';
import { IoIosCheckmarkCircle } from 'react-icons/io';
const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center'><IoIosCheckmarkCircle className='text-emerald-500 mr-2'></IoIosCheckmarkCircle>{feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string,
}
export default Feature;