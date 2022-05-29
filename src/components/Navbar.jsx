
import { push as Menu } from 'react-burger-menu'




function Navbar(){
    return(
        <Menu right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
            <ul>
                <li>test 1</li>
                <li>test 2</li>
            </ul>
        </Menu>
    )
}

export default Navbar;