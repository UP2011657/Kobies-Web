import { push as Menu } from 'react-burger-menu'

import Style from '../styling/BurgerMenuStyle.scss'


function Navbar(){
    return(
        <Menu right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } style={Style}>
            <a href='../Pages/home'>Home</a>
            <a href='../Pages/home'>Another Page</a>
        </Menu>
    )
}

export default Navbar;