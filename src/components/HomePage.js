import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
        <Link to={'todos'}><button>ToDo</button></Link>
            <button>Photos</button>
        </>
    )
}

export default HomePage;