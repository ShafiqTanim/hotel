import React, {useState } from "react";
import { Link,useLocation } from 'react-router-dom';

function Sidebar() {
    
    {/*for link active */}
    const location = useLocation();
    const activeMenu=(e)=>{
        document.querySelectorAll('.submenu_class').forEach(
            function(e){
                e.classList.add('d-none');
            }
        )
        const childElement = e.target.parentElement.querySelector('.d-none');
        if(childElement && childElement.classList.contains('d-none')){
            childElement.classList.remove('d-none');
        }
    }
    const isLinkActive = (path)=>{
        return location.pathname == path ? 'active' : "";
    }

  	return (
        <div className="sidebar" id="sidebar">
			<div className="sidebar-inner slimscroll">
				<div id="sidebar-menu" className="sidebar-menu">
					<ul>
						<li className={`${isLinkActive("/")}`} onClick={activeMenu}> 
                            <Link to={"/"} className={`${isLinkActive("/")}`}>
                                <i className="fas fa-tachometer-alt"></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>
						<li className="list-divider"></li>
						<li className="submenu" onClick={activeMenu}> 
                            <a href="#">
                                <i className="fas fa-suitcase"></i>
                                <span> Booking </span>
                                <span className="menu-arrow"></span>
                            </a>
							<ul className="submenu_class d-none">
								<li>
                                    <Link to={"/booking"} className={`${isLinkActive("/booking")}`}>All Booking </Link>
                                </li>
								<li><Link to={"/booking/add"} className={`${isLinkActive("/booking/add")}`}>Add Booking </Link></li>
								{/* <li><a href="add-booking.html"> Add Booking </a></li> */}
							</ul>
						</li>
						<li className="submenu" onClick={activeMenu}>
                            <a href="#"><i className="fas fa-user"></i> <span> Customers </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class  d-none">
								<li>
									<Link to={"/customer"} className={`${isLinkActive("/customer")}`}>All Customer </Link>
								</li>
								<li><Link to={"/customer/add"} className={`${isLinkActive("/customer/add")}`}>Add Customer </Link></li>
								{/* <li><a href="add-customer.html"> Add Customer </a></li> */}
							</ul>
						</li>
						<li className="submenu" onClick={activeMenu}>
                            <a href="#"><i className="fas fa-user"></i> <span> Room Category </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class  d-none">
								<li>
									<Link to={"/roomcategory"} className={`${isLinkActive("/roomcategory")}`}>All Room Category </Link>
								</li>
								<li><Link to={"/roomcategory/add"} className={`${isLinkActive("/roomcategory/add")}`}>Add Room Category </Link></li>
								{/* <li><a href="add-roomcategory.html"> Add Room Category </a></li> */}
							</ul>
						</li>
						<li className="submenu" onClick={activeMenu}>
                            <a href="#"><i className="fas fa-user"></i> <span> Service List </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class  d-none">
								<li>
									<Link to={"/servicelist"} className={`${isLinkActive("/servicelist")}`}>All Service List </Link>
								</li>
								<li><Link to={"/servicelist/add"} className={`${isLinkActive("/servicelist/add")}`}>Add Service List </Link></li>
								{/* <li><a href="add-roomcategory.html"> Add Room Category </a></li> */}
							</ul>
						</li>
						<li className="submenu" onClick={activeMenu}>
                            <a href="#"><i className="fas fa-user"></i> <span> Room List </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class  d-none">
								<li>
									<Link to={"/roomlist"} className={`${isLinkActive("/roomlist")}`}>All Room List </Link>
								</li>
								<li><Link to={"/roomlist/add"} className={`${isLinkActive("/roomlist/add")}`}>Add Room List </Link></li>
								{/* <li><a href="add-roomcategory.html"> Add Room Category </a></li> */}
							</ul>
						</li>
						<li className="submenu" onClick={activeMenu}>
                            <a href="#"><i className="fas fa-user"></i> <span> Employee </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class  d-none">
								<li>
									<Link to={"/employee"} className={`${isLinkActive("/employee")}`}>All Employee </Link>
								</li>
								<li><Link to={"/employee/add"} className={`${isLinkActive("/employee/add")}`}>Add Employee </Link></li>
								{/* <li><a href="add-roomcategory.html"> Add Room Category </a></li> */}
							</ul>
						</li>
						<li className="submenu" onClick={activeMenu}>
                            <a href="#"><i className="fas fa-user"></i> <span> Menu Category </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class  d-none">
								<li>
									<Link to={"/menucategory"} className={`${isLinkActive("/menucategory")}`}>All Menu Category </Link>
								</li>
								<li><Link to={"/menucategory/add"} className={`${isLinkActive("/menucategory/add")}`}>Add Menu Category </Link></li>
								{/* <li><a href="add-roomcategory.html"> Add Room Category </a></li> */}
							</ul>
						</li>
						<li className="submenu" onClick={activeMenu}>
                            <a href="#"><i className="fas fa-user"></i> <span> Menu Item </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class  d-none">
								<li>
									<Link to={"/menuitem"} className={`${isLinkActive("/menuitem")}`}>All Menu Item </Link>
								</li>
								<li><Link to={"/menuitem/add"} className={`${isLinkActive("/menuitem/add")}`}>Add Menu Item </Link></li>
								{/* <li><a href="add-roomcategory.html"> Add Room Category </a></li> */}
							</ul>
						</li>
						<li className="submenu" onClick={activeMenu}>
                            <a href="#"><i className="fas fa-user"></i> <span> Package </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class  d-none">
								<li>
									<Link to={"/menuitemmenucategory"} className={`${isLinkActive("/menuitemmenucategory")}`}>All Menu Item </Link>
								</li>
								<li><Link to={"/menuitemmenucategory/add"} className={`${isLinkActive("/menuitemmenucategory/add")}`}>Add Menu Item </Link></li>
								{/* <li><a href="add-roomcategory.html"> Add Room Category </a></li> */}
							</ul>
						</li>
						<li> <a href="pricing.html"><i className="far fa-money-bill-alt"></i> <span>Pricing</span></a> </li>
						<li> <a href="settings.html"><i className="fas fa-cog"></i> <span>Settings</span></a> </li>
						<li className="list-divider"></li>
					</ul>
				</div>
			</div>
		</div>
  	)
}

export default Sidebar