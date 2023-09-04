// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./NavBar.css";

// function Navbar_Product() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   return (
//     <>
//       <nav className="navbar">
//         <div className="nav-container">
//           <NavLink exact to="/product" className="nav-logo">
//             <img
//               src="img/standard.gif"
//               style={{ width: "100%", height: "75px", marginRight: "900%" }}
//             />
//           </NavLink>

//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/smartphone"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 <b>Smartphones</b>
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/laptops"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 <b>Laptops</b>
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/fragrances"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 <b>Fragrances</b>
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/skincare"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 <b>Skincare</b>
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/groceries"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 <b>Groceries</b>
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/furniture"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 <b>Furniture</b>
//               </NavLink>
//             </li>
//           </ul>
//           <div className="icon-container">
//             <li className="cart-item">
//               <NavLink
//                 exact
//                 to="/cart"
//                 activeClassName="active"
//                 className="cart-links"
//                 onClick={handleClick}
//               >
//                 <img
//                   src="img/shopping-cart2.gif"
//                   alt="Shopping Cart"
//                   className="cart-icon"
//                 />
//               </NavLink>
//             </li>
//           </div>
//           <div className="nav-icon" onClick={handleClick}>
//             <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar_Product;


















import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function Navbar_Product(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
{
  console.log(props);
}
  return (
    
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/product" className="nav-logo">
          <img
            src="img/standard.gif"
            style={{ width: "1000%", height: "75px", marginRight: "10px" }}
            alt="Logo"
          />
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/smartphone"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              <b>Smartphones</b>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/laptops"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              <b>Laptops</b>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/fragrances"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              <b>Fragrances</b>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/skincare"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              <b>Skincare</b>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/groceries"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              <b>Groceries</b>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/furniture"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              <b>Furniture</b>
            </NavLink>
          </li>
        </ul>

        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
      <div className="myc">
        
        <ul className="nav-menu">
          <li className="cart-item">
            <NavLink
              exact
              to="/cart"
              activeClassName="active"
              className="cart-links"
              
            >
              <img
                src="img/shopping-cart2.gif"
                alt="Shopping Cart"
                className="cart-icon"
              />
            </NavLink>
          </li>
        </ul> 
      </div>
    </nav>
  );
}

export default Navbar_Product;
