import React from 'react'

const NavBar = () => {
    return(
        <div className="mainmenu-area">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-lg-2 col-md-1 col-2 toggle-position d-none d-md-block">
                    <div className="menu-trigger">
                        <i className="fal fa-bars"></i>
                    </div>
                </div>
                <div className="col-lg-8 col-md-10 col-10">
                    <div className="mainmenu">
                        <ul>
                            <li><a className="active" href="#">Home</a></li>
                            <li className="dropdown drop_main">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Insights</a>
                                <div className="dropdown-menu multi-level">
                                    <div className="row accordion accor2 justify-content-between">
                                        <div className="header_menu">
                                            <h5 className="collapse_title" data-toggle="collapse" data-target="#pre" aria-expanded="true">PREDICTIONS 2021</h5>
                                            <ul className="collapse show" id="pre" data-parent=".accor2">
                                                <li><a href="#">Cybersecurity & privacy</a></li>
                                                <li><a href="#">Future of business</a></li>
                                                <li><a href="#">Future of technology</a></li>
                                                <li><a href="#">Future of work</a></li>
                                                <li><a href="#">Work from home</a></li>
                                                <li><a href="#">Industry</a></li>
                                            </ul>
                                        </div>
                                        <div className="header_menu">
                                            <h5 className="collapse_title" data-toggle="collapse" data-target="#tech" aria-expanded="false">TECHNOLOGY</h5>
                                            <ul className="collapse" id="tech" data-parent=".accor2">
                                                <li><a href="#">AI & Automation</a></li>
                                                <li><a href="#">Digital Strategy</a></li>
                                                <li><a href="#">Data privacy</a></li>
                                                <li><a href="#">Ethical AI</a></li>
                                                <li><a href="#">Machine Learning</a></li>
                                                <li><a href="#">All insights</a></li>
                                            </ul>
                                        </div>
                                        <div className="header_menu">
                                            <h5 className="collapse_title" data-toggle="collapse" data-target="#busi" aria-expanded="false">BUSINESS</h5>
                                            <ul className="collapse" id="busi" data-parent=".accor2">
                                                <li><a href="#">Competition</a></li>
                                                <li><a href="#">Strategy</a></li>
                                                <li><a href="#">Reality</a></li>
                                                <li><a href="#">Policy making</a></li>
                                                <li><a href="#">Future shift</a></li>
                                                <li><a href="#">All insights</a></li>
                                            </ul>
                                        </div>
                                        <div className="header_menu">
                                            <h5 className="collapse_title" data-toggle="collapse" data-target="#soc" aria-expanded="false">SOCIETY</h5>
                                            <ul className="collapse" id="soc" data-parent=".accor2">
                                                <li><a href="#">COVID-19</a></li>
                                                <li><a href="#">Digital</a></li>
                                                <li><a href="#">Social</a></li>
                                                <li><a href="#">Political</a></li>
                                                <li><a href="#">Economy</a></li>
                                                <li><a href="#">All insights</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>     
                            <li className="dropdown drop_main">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Services</a>
                                <div className="dropdown-menu multi-level">
                                    <div className="row accordion accor1 justify-content-between">
                                        <div className="header_menu">
                                            <h5 className="collapse_title" data-toggle="collapse" data-target="#about" aria-expanded="true">FOR BUSINESS & IT LEADERS</h5>
                                            <ul className="collapse show" id="about" data-parent=".accor1">
                                                <li><a href="#">Advisory</a></li>
                                                <li><a href="#">Insights</a></li>
                                                <li><a href="#">Strategy</a></li>
                                                <li><a href="#">CIO/CISO council</a></li>
                                            </ul>
                                        </div>
                                        <div className="header_menu">
                                            <h5 className="collapse_title" data-toggle="collapse" data-target="#help" aria-expanded="false">FOR TECHNOLOGY  & SERVICE PROVIDERS</h5>
                                            <ul className="collapse" id="help" data-parent=".accor1">
                                                <li><a href="#">Briefing</a></li>
                                                <li><a href="#">Consultation</a></li>
                                                <li><a href="#">Influencers</a></li>
                                                <li><a href="#">Sponsorship</a></li>
                                            </ul>
                                        </div>
                                        <div className="header_menu">
                                            <h5 className="collapse_title" data-toggle="collapse" data-target="#reso" aria-expanded="false">FOR ANALYSTS</h5>
                                            <ul className="collapse" id="reso" data-parent=".accor1">
                                                <li><a href="#">Brand building</a></li>
                                                <li><a href="#">Contribution</a></li>
                                                <li><a href="#">Collaboration</a></li>
                                                <li><a href="#">Community</a></li>
                                            </ul>
                                        </div>
                                        <div className="header_menu">
                                            <h5 className="collapse_title" data-toggle="collapse" data-target="#partners" aria-expanded="false">FOR STRATEGISTS & TECHNOLOGY EVANGELISTS</h5>
                                            <ul className="collapse" id="partners" data-parent=".accor1">
                                                <li><a href="#">Collaboration</a></li>
                                                <li><a href="#">Research</a></li>
                                                <li><a href="#">Events</a></li>
                                                <li><a href="#">Influencers</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>     
                            <li className="dropdown drop_main">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Community</a>
                                <ul className="dropdown-menu small_menu">
                                    <li className="dropdown-submenu dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            Automate & delegate to machines <i className="fal fa-angle-right"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Artificial Intelligence</a></li>
                                            <li><a href="#">Autonomy</a></li>
                                            <li><a href="#">Drones</a></li>
                                            <li><a href="#">Robotics</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            Engage society <i className="fal fa-angle-right"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Artificial Intelligence</a></li>
                                            <li><a href="#">Autonomy</a></li>
                                            <li><a href="#">Drones</a></li>
                                            <li><a href="#">Robotics</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            Invest in technology & services <i className="fal fa-angle-right"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Artificial Intelligence</a></li>
                                            <li><a href="#">Autonomy</a></li>
                                            <li><a href="#">Drones</a></li>
                                            <li><a href="#">Robotics</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            Manage & decide <i className="fal fa-angle-right"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Artificial Intelligence</a></li>
                                            <li><a href="#">Autonomy</a></li>
                                            <li><a href="#">Drones</a></li>
                                            <li><a href="#">Robotics</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            Protect, preserve & defend <i className="fal fa-angle-right"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Artificial Intelligence</a></li>
                                            <li><a href="#">Autonomy</a></li>
                                            <li><a href="#">Drones</a></li>
                                            <li><a href="#">Robotics</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            Sense, connect & share <i className="fal fa-angle-right"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Artificial Intelligence</a></li>
                                            <li><a href="#">Autonomy</a></li>
                                            <li><a href="#">Drones</a></li>
                                            <li><a href="#">Robotics</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            The business of technology <i className="fal fa-angle-right"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Artificial Intelligence</a></li>
                                            <li><a href="#">Autonomy</a></li>
                                            <li><a href="#">Drones</a></li>
                                            <li><a href="#">Robotics</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            Predictions <i className="fal fa-angle-right"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Artificial Intelligence</a></li>
                                            <li><a href="#">Autonomy</a></li>
                                            <li><a href="#">Drones</a></li>
                                            <li><a href="#">Robotics</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown drop_main">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Events</a>
                                <ul className="dropdown-menu small_menu">
                                    <li className="dropdown-submenu dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            For business & IT leaders <i className="fal fa-angle-right"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Advisory</a></li>
                                            <li><a href="#">Insights</a></li>
                                            <li><a href="#">Strategy</a></li>
                                            <li><a href="#">CIO/CISO council</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                           For technology & service providers <i className="fal fa-angle-right"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Advisory</a></li>
                                            <li><a href="#">Insights</a></li>
                                            <li><a href="#">Strategy</a></li>
                                            <li><a href="#">CIO/CISO council</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                           For analysts <i className="fal fa-angle-right"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Advisory</a></li>
                                            <li><a href="#">Insights</a></li>
                                            <li><a href="#">Strategy</a></li>
                                            <li><a href="#">CIO/CISO council</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                           For strategists & technology evangelists <i className="fal fa-angle-right"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Advisory</a></li>
                                            <li><a href="#">Insights</a></li>
                                            <li><a href="#">Strategy</a></li>
                                            <li><a href="#">CIO/CISO council</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#">About Us</a></li>
                            <li className="d-md-none"><a href="#">Let's Talk</a></li>
                        </ul>
                        <div className="close-menu">
                            <img src="assets/img/close.svg" alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default NavBar;