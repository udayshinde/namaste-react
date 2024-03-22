import { useState } from "react";

const User = (props) => {
    const { name, city } = props;
    const [count] = useState(0)
    return (
        <div>
            <h2>Count : {count}</h2>
            <h2>Name : {name}</h2>
            <h2>City : {city} </h2>
        </div>
    )
}

export default User;