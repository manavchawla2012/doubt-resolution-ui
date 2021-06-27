import {checkAuthenticationServerSide} from "../lib/login";
import PageHOC from "../hoc/PageHOC";


const IndexPage = (props) => {
    return(
        <div>Home Page
            <h1>
                Manav
            </h1>
        </div>
    )
}

export async function getServerSideProps(context) {
    await checkAuthenticationServerSide(context)
    return {props: {}}
}

export default PageHOC(IndexPage)
