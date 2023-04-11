import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import './LayoutNavbar.css';
import { ItemContext } from '../../state/ItemContext';

const LayoutNavbar = () => {
    const { shopItems } = useContext(ItemContext);

    return (
        <nav  className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-container container">
                    {/* check box input */}
                    <input type="checkbox" className="menu-btn" id="menu-btn" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        {
                            shopItems.length > 0 && <li> <Link className="nav-link" to="/my-items">My Items <span className='badge bg-success'>{shopItems.length}</span> </Link></li>
                        }
                        <li> <Link className="nav-link" to="/home">Home</Link></li>
                        <li> <Link className="nav-link" to="/contact">Contact</Link></li>
                    </ul>
                    <h1 className="products-cont"><Link className="nav-link" to="/home">E-commerce</Link></h1>
                    <h1 className="products-cont"><Link className="nav-link" to="/">Products</Link></h1>
            </div>
        </nav>

    );
}

export default LayoutNavbar;