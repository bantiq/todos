import { Link } from "react-router-dom";

function NotFoundPage () {

    return (
        <>
            <div>Not Found Page</div>
            <button variant="outlined">
                <Link to={'/'} style={{textDecoration: 'none', color: 'blue'}}>Go Home</Link>
            </button>
        </>
    )
}

export default NotFoundPage;