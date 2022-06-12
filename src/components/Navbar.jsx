import { push as Menu } from 'react-burger-menu'

import Style from '../styling/BurgerMenuStyle.scss'


function Navbar(){
    return(
        <Menu right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } style={Style}>
            {/* Added pages must be updated in getPage() function in index.js */}
            <a href='/'>Home</a>
            <a href='anotherPage'>Another Page</a>
            <a href='threePage'>Three Page</a>
        </Menu>
    )
}

export default Navbar;