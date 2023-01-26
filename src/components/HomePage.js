import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
        <Link to={'todos'}><button>ToDo</button></Link>
        <Button variant="outlined">
                <Link to={'photos'} style={{textDecoration: 'none', color: 'blue'}}>Photos</Link>
            </Button>
        </>
    )
}

export default HomePage;