import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor called");
        this.state = {
            userInfo: {
                name: '',
                location: '',
                bio: ''
            }
        }
    }
    render() {
        console.log("render method called");
        const { name, location, bio } = this.state.userInfo;
        return (
            <div>
                <h2>Name : {name}</h2>
                <h2>City : {location}</h2>
                <h2>Bio : {bio}</h2>
            </div >
        )
    }

    async componentDidMount() {
        console.log("component did mount before API called");
        let url = 'https://api.github.com/users/udayshinde';
        const data = await fetch(url);
        const json = await data.json();
        console.log(json);
        this.obj = json;
        console.log("component did mount after API called");
        this.setState({
            userInfo: json
        });
    }

    componentDidUpdate() {
        console.log("component did update called");
    }

    componentWillUnmount() {
        console.log("component unmounted called");
    }
}

export default UserClass;