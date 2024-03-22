import RestaurantCard from "./ResaurentCard"
import resObj from "../../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from '../../utils/useOnlineStatus';
const Body = () => {
    const [restauantList, setRestaurantList] = useState([]);
    const [filteredRestauantList, setfilteredRestauantList] = useState([]);
    const [searchText, setSearchText] = useState("");
    let swiggyData;
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5807719&lng=73.9787063&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        //optional chaining
        swiggyData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setRestaurantList(swiggyData);
        setfilteredRestauantList(swiggyData);
    }

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return <h1>Looks like you are offline!! Please check your internet connection!</h1>
    }


    return filteredRestauantList.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className='filter'>
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);

                    }} />
                    <button className="search-btn" onClick={() => {
                        const filterList = restauantList.filter((v) => {
                            return v.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setfilteredRestauantList(filterList);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    console.log("btn clicked");
                    const filterList = swiggyData.filter((v) => {
                        return v.info.avgRating >= 4.5;
                    })
                    setRestaurantList(filterList);
                }}
                >
                    Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestauantList.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                }

            </div>
        </div>
    )
}

export default Body;