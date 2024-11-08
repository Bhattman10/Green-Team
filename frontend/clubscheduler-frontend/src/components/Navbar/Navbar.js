import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'
import { toast } from 'react-toastify'

export default function Navbar()
{

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate("/")
    }


    return <nav className="nav">
        <Link to="/" className="site-title">
            Swamp Schedules
        </Link>
        <ul>
            {user ?
            <>
            <CustomLink to="/calendar">My Calendar</CustomLink>
            <CustomLink to="/explore">Explore Clubs</CustomLink>
            <CustomLink to="/clubevents">Discover Events</CustomLink>
            <CustomLink to="/profile">My Profile</CustomLink>
            <CustomLink to="/" onClick={handleLogout}>Logout</CustomLink>
            </> 
            :
            <>
            <CustomLink to="/register">Register</CustomLink>
            <CustomLink to="/login">Login</CustomLink>
            </>
            }
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    let isActive = useMatch({path: resolvedPath.pathname, end: true})

    if (to === "/") {
        isActive = false;
    }

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )

}