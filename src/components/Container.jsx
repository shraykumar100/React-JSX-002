import './Container.css';
import airbnb from './assets/airbnb.png';
const Container = () => {
    return (
        <div className="box">
            <h1>
                The Evolution of Airbnb's Frontend
            </h1>
            <h4>
                @spikebrehm
            </h4>
            <img className='img' src={airbnb}></img>
        </div>
    );
};

export default Container;