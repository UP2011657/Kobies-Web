import { pushRotate as Menu } from 'react-burger-menu'


function Navbar(){
    return(
        <Menu right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
            <a>Home</a>
            <a>Another Page</a>
        </Menu>
    )
}

export default Navbar;