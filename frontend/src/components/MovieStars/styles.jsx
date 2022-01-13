import {ReactComponent as StarFull} from 'acess/github/star-full.svg';
import {ReactComponent as StarHalf} from 'acess/github/star-half.svg';
import {ReactComponent as StarEmpty} from 'acess/github/star-empty.svg';
import './styles.css'

function MovieStars() {


    return (

        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
} 

export default MovieStars;