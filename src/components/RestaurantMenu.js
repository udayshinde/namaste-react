import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenuHook";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo.length === 0) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo.cards[0]?.card?.card?.info;
    const { carousel } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>{costForTwoMessage}</h3>
            <h3>Menu</h3>
            <ul>
                {
                    carousel.map(v => <li key={v.bannerId}>{v.title} - {"Rs. "}{v.dish.info.price / 100} /-</li>)
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu; 