import {Button, Nav, Navbar} from "react-bootstrap";
import {logoutAction} from "../../redux/actions/authAction";
import {connect} from "react-redux";

const WebsiteNavBarComponent = ({logout}) => {
    return(
        <>
            <Navbar bg="light" variant="light" fixed={"top"}>
                <Navbar.Brand href="#home" className="mr-auto">
                    <img
                        alt=""
                        src={"logo.svg"}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Home| Raise Doubt
                </Navbar.Brand>
                <Nav>
                    <Nav.Link eventKey={2}>
                        <Button onClick={logout} style={{margin: 0}}>Logout</Button>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}
const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logoutAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WebsiteNavBarComponent)
