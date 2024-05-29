
import { AppBar, Toolbar } from '@mui/material';
import logo from '../Logo/logo.jpg';

const Header = () => {
    
    
    return (
        <AppBar position="static" color="secondary">
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 120 }} />
            </Toolbar>
        </AppBar>
    )
}

export default Header;