import {Component} from "react";
import {getUserDetailsAction} from "../redux/actions/authAction";
import {connect} from "react-redux";

const PageHOC = (WrappedComponent) => {
    class BasePage extends Component {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
            this.props.userDetails()
        }

        render() {
            return (
                <>
                    <WrappedComponent {...this.props}/>
                </>
            )
        }
    }

    const mapStateToProps = state => {
        return {
            user_details: state.auth.user_details
        }
    }

    const mapDispatchToProps = dispatch => {
        return {
            userDetails: () => dispatch(getUserDetailsAction())
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(BasePage)
}


export default PageHOC
