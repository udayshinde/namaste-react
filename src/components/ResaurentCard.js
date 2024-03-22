import { CDN_URL } from "../../utils/constants";
import { Link } from 'react-router-dom';

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRatingString, costForTwo, sla, id } = resData?.info;
    return (
        <div className='res-card'>
            <Link to={`restaurants/${id}`}>
                <img className='img-logo'
                    alt="img-logo"
                    src={CDN_URL + resData.info.cloudinaryImageId} />
                <h3>{name}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{avgRatingString} Stars</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.slaString}</h4>
            </Link>
        </div>
    )
}

export default RestaurantCard;