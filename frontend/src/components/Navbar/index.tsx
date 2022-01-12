import {ReactComponent as IconGitHub} from '../../acess/github/Vector.svg';
import './styles.css';

function navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                <h1>DSMovie</h1>
                <a href="https://github.com/ViniDevelloper">
                    <div className="dsmovie-contact-container">
                        <IconGitHub/>
                        <p className="dsmovie-contact-link">/ViniDevelloper</p>
                    </div>
                </a>    
                </div>
            </nav>
        </header>


    );


}

export default navbar;