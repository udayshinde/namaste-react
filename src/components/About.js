import { Component } from 'react';
import User from './User';
import UserClass from './UserClass';
class About extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>About</h1>
                <h3>Namaste React....</h3>
                {/* <User name={"Udaysinh"} city={"Pune"} /> */}
                <UserClass name={"Mukta"} city={"Vita"} />
            </div>
        )
    }
}

export default About;