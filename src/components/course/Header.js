import mainLogo from '../../image/logo.png'
import '../../css/student.css'

function Header(props) {
    return (
        <div className="jumbotron header-background">
            <div className="logo"><img src={mainLogo}></img></div>
            <h1 className="display-4 header-title">{props.title}</h1>
            <hr />
            <p className="my-4">
                {props.description}
            </p>
        </div>
    );
}
export default Header;