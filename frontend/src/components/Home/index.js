import "./index.css"
import picture from "./TeaWithFriends.jpg";

const Home = () => {
    return (
        <div id="home-container">
            <img src={picture} />
            <div id="home-page-overlay">
                <h1>Welcome to Remember The Tea</h1>
            </div>
        </div>
    )
}

export default Home;
