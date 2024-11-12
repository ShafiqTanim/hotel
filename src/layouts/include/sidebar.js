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
						{/* <li className="submenu" onClick={activeMenu}> <a href="#"><i className="fas fa-key"></i> <span> Rooms </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class d-none">
								<li>
									<Link to={"/rooms"} className={`${isLinkActive("/rooms")}`}>All Rooms </Link>
								</li>
								<li><Link to={"/rooms/add"} className={`${isLinkActive("/rooms/add")}`}> Add Rooms </Link></li>
								{/* <li><a href="add-room.html"> Add Rooms </a></li>
							</ul>
						</li> */}
						{/* <li className="submenu" onClick={activeMenu}> <a href="#"><i className="fas fa-user"></i> <span> Staff </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class d-none">
								<li>
									<Link to={"/staff"} className={`${isLinkActive("/staff")}`}>All Staff </Link>
								</li>
								<li><Link to={"/staff/add"} className={`${isLinkActive("/staff/add")}`}> Add Staff </Link></li>
								{/* <li><a href="add-staff.html"> Add Staff </a></li>
							</ul>
						</li> */}
						<li> <a href="pricing.html"><i className="far fa-money-bill-alt"></i> <span>Pricing</span></a> </li>
						
						{/* <li className="submenu" onClick={activeMenu}> <a href="#"><i className="fas fa-user"></i> <span> Employees </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class d-none">
								<li><a href="employees.html">Employees List </a></li>
								<li><a href="leaves.html">Leaves </a></li>
								<li><a href="holidays.html">Holidays </a></li>
								<li><a href="attendance.html">Attendance </a></li>
							</ul>
						</li>
						<li className="submenu" onClick={activeMenu}> <a href="#"><i className="far fa-money-bill-alt"></i> <span> Accounts </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class d-none">
								<li><a href="invoices.html">Invoices </a></li>
								<li><a href="payments.html">Payments </a></li>
								<li><a href="expenses.html">Expenses </a></li>
								<li><a href="taxes.html">Taxes </a></li>
								<li><a href="provident-fund.html">Provident Fund </a></li>
							</ul>
						</li>
						<li className="submenu" onClick={activeMenu}> <a href="#"><i className="fas fa-book"></i> <span> Payroll </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class d-none">
								<li><a href="salary.html">Employee Salary </a></li>
								<li><a href="salary-veiw.html">Payslip </a></li>
							</ul>
						</li>
						<li> <a href="calendar.html"><i className="fas fa-calendar-alt"></i> <span>Calendar</span></a> </li>
						<li className="submenu" onClick={activeMenu}> <a href="#"><i className="fe fe-table"></i> <span> Blog </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class d-none">
								<li><a href="blog.html">Blog </a></li>
								<li><a href="blog-details.html">Blog Veiw </a></li>
								<li><a href="add-blog.html">Add Blog </a></li>
								<li><a href="edit-blog.html">Edit Blog </a></li>
							</ul>
						</li>
						<li> <a href="assets.html"><i className="fas fa-cube"></i> <span>Assests</span></a> </li>
						<li> <a href="activities.html"><i className="far fa-bell"></i> <span>Activities</span></a> </li>
						<li className="submenu" onClick={activeMenu}> <a href="#"><i className="fe fe-table"></i> <span> Reports </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class d-none">
								<li><a href="expense-reports.html">Expense Report </a></li>
								<li><a href="invoice-reports.html">Invoice Report </a></li>
							</ul>
						</li> */}
						<li> <a href="settings.html"><i className="fas fa-cog"></i> <span>Settings</span></a> </li>
						<li className="list-divider"></li>
						{/* <li className="menu-title mt-3"> <span>UI ELEMENTS</span> </li>
						<li className="submenu" onClick={activeMenu}> <a href="#"><i className="fas fa-laptop"></i> <span> Components </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class d-none">
								<li><a href="uikit.html">UI Kit </a></li>
								<li><a href="typography.html">Typography </a></li>
								<li><a href="tabs.html">Tabs </a></li>
							</ul>
						</li>
						<li className="submenu" onClick={activeMenu}> <a href="#"><i className="fas fa-edit"></i> <span> Forms </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class d-none">
								<li><a href="form-basic-inputs.html">Basic Input </a></li>
								<li><a href="form-input-groups.html">Input Groups </a></li>
								<li><a href="form-horizontal.html">Horizontal Form </a></li>
								<li><a href="form-vertical.html">Vertical Form </a></li>
							</ul>
						</li>
						<li className="submenu" onClick={activeMenu}> <a href="#"><i className="fas fa-table"></i> <span> Tables </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class d-none">
								<li><a href="tables-basic.html">Basic Table </a></li>
								<li><a href="tables-datatables.html">Data Table </a></li>
							</ul>
						</li>
						<li className="list-divider"></li>
						<li className="menu-title mt-3"> <span>EXTRAS</span> </li>
						<li className="submenu" onClick={activeMenu}> <a href="#"><i className="fas fa-columns"></i> <span> Pages </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class d-none">
								<li><a href="login.html">Login </a></li>
								<li><a href="register.html">Register </a></li>
								<li><a href="forgot-password.html">Forgot Password </a></li>
								<li><a href="change-password.html">Change Password </a></li>
								<li><a href="lock-screen.html">Lockscreen </a></li>
								<li><a href="profile.html">Profile </a></li>
								<li><a href="gallery.html">Gallery </a></li>
								<li><a href="error-404.html">404 Error </a></li>
								<li><a href="error-500.html">500 Error </a></li>
								<li><a href="blank-page.html">Blank Page </a></li>
							</ul>
						</li>
						<li className="submenu" onClick={activeMenu}> <a href="#"><i className="fas fa-share-alt"></i> <span> Multi Level </span> <span className="menu-arrow"></span></a>
							<ul className="submenu_class d-none">
								<li><a href="">Level 1 </a></li>
								<li><a href="">Level 2 </a></li>
							</ul>
						</li> */}
					</ul>
				</div>
			</div>
		</div>
  	)
}

export default Sidebar