import moon from "../assets/icon-moon.svg"; 
import sun from "../assets/icon-sun.svg"; 
import "./Heading.css"

const Heading = (props) => {
    const colorModeClickHandler = () => {
        props.onColorChange(props.currentColor)
    }

    return (
        <header className="heading">
            <h1>devfinder</h1>
            <div role="button" tabIndex="0" className="heading_themes" onClick={colorModeClickHandler} onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === 'Space') {
                colorModeClickHandler();
            }
        }}>
                <div className="heading_theme">LIGHT <img src={sun} alt="Picture of a sun for light mode" role="presentation"/></div>
                <div className="heading_theme">
                    DARK <img src={moon} alt="Picture of a moon for dark mode" role="presentation"/>
                </div>
            </div>
        </header>
    )
}

export default Heading; 