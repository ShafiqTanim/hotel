import React, { useState } from 'react';
import '../assets_admin/css/bootstrap.min.css';
import '../assets_admin/plugins/fontawesome/css/fontawesome.min.css';
import '../assets_admin/plugins/fontawesome/css/all.min.css';
import '../assets_admin/css/feathericon.min.css';
import '../assets_admin/plugins/morris/morris.css';
import '../assets_admin/css/style.css';

function Header() {
	const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
	const [ncl, setncl] = useState('');
	const [nclstyle, setnclstyle] = useState('');
	const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  
	const toggleUserDropdown = () => {
	  if(isUserDropdownOpen){
		setIsUserDropdownOpen(false);
		setncl('show')
		setnclstyle('showStyle')
	  }else{
		setIsUserDropdownOpen(true)
		setncl('')
		setnclstyle('')
	  }
	  // Close notification dropdown when user dropdown is opened
	  if (isNotificationDropdownOpen) setIsNotificationDropdownOpen(false);
	};
  
	const toggleNotificationDropdown = () => {
	  setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
	  // Close user dropdown when notification dropdown is opened
	  if (isUserDropdownOpen) setIsUserDropdownOpen(false);
	};
    return (
		<div className="header">
			<div className="header-left">
				<a href="index.html" className="logo"> <img src="assets_admin/img/hotel_logo.png" width="50" height="70" alt="logo"/> <span className="logoclass">HOTEL</span> </a>
				<a href="index.html" className="logo logo-small"> <img src="assets_admin/img/hotel_logo.png" alt="Logo" width="30" height="30"/> </a>
			</div>
			<a href="#" id="toggle_btn"> <i className="fe fe-text-align-left"></i> </a>
			<a className="mobile_btn" id="mobile_btn"> <i className="fas fa-bars"></i> </a>
			<ul className="nav user-menu">
				<li className="nav-item dropdown noti-dropdown">
					<a href="#" className="dropdown-toggle nav-link" onClick={toggleNotificationDropdown} data-toggle="dropdown"> <i className="fe fe-bell"></i> <span className="badge badge-pill">3</span> </a>
					<div className="dropdown-menu notifications">
						<div className="topnav-dropdown-header"> <span className="notification-title">Notifications</span> <a href="javascript:void(0)" className="clear-noti"> Clear All </a> </div>
						<div className="noti-content">
							<ul className="notification-list">
								<li className="notification-message">
									<a href="#">
										<div className="media"> <span className="avatar avatar-sm">
											<img className="avatar-img rounded-circle" alt="User Image" src="assets/img/profiles/avatar-02.jpg"/>
											</span>
											<div className="media-body">
												<p className="noti-details"><span className="noti-title">Carlson Tech</span> has approved <span className="noti-title">your estimate</span></p>
												<p className="noti-time"><span className="notification-time">4 mins ago</span> </p>
											</div>
										</div>
									</a>
								</li>
							</ul>
						</div>
						<div className="topnav-dropdown-footer"> <a href="#">View all Notifications</a> </div>
					</div>
				</li>
				<li className={`nav-item dropdown has-arrow ${ncl}`}>
					<a href="#" className="dropdown-toggle nav-link" onClick={toggleUserDropdown}> <span className="user-img"><img className="rounded-circle" src="assets/img/profiles/avatar-01.jpg" width="31" alt="Soeng Souy"/></span> </a>
					<div className={`dropdown-menu ${ncl}  ${nclstyle}`}>
						<div className="user-header">
							<div className="avatar avatar-sm"> <img src="assets/img/profiles/avatar-01.jpg" alt="User Image" className="avatar-img rounded-circle"/> </div>
							<div className="user-text">
								<h6>Soeng Souy</h6>
								<p className="text-muted mb-0">Administrator</p>
							</div>
						</div>
						<a className="dropdown-item" href="profile.html">My Profile</a>
						<a className="dropdown-item" href="settings.html">Account Settings</a>
						<a className="dropdown-item" href="login.html">Logout</a>
					</div>
				</li>
			</ul>
			<div className="top-nav-search">
				<form>
					<input type="text" className="form-control" placeholder="Search here"/>
					<button className="btn" type="submit"><i className="fas fa-search"></i></button>
				</form>
			</div>
		</div>
    );
}
  
export default Header;
  