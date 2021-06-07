import React from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 ">
          <span className="badge rounded-pill bg-danger ">Navbar</span>
          <span className="badge bg-secondary rounded-pill  m-2 ">
            {props.onCount
              ?  props.onCount + " line/lines in total. "
              : " No exist. "}
          </span>
          <span className="badge bg-secondary rounded-pill  m-2 ">
            { props.onSum() ?  props.onSum() + " item/items in total." : "No exist."}
            
        </span>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
