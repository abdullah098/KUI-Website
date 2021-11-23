import React from 'react';

import { NavLink } from 'react-router-dom';

import Logo from '../Assets/logo.png';
import Home from '../Assets/Icons/Home.svg';
import StudCap from '../Assets/Icons/Student-with-Cap.svg';
import Graducation from '../Assets/Icons/graduation-cap.svg';
import Mail from '../Assets/Icons/Mailbox.svg';
import Acadmic from '../Assets/Icons/spellcheck.svg';
import User from '../Assets/usser.png';
import {ReactComponent as LogoutIcon} from '../Assets/Icons/Logout.svg';

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const Navbar = () => {

    const buttonsList = [
        {
            title: 'Dashboard',
            icon: Home,
            link: '/dashboard'
        },
        {
            title: 'Studying Students',
            icon: StudCap,
            link: '/studying-students'
        },
        {
            title: 'Graduate Students',
            icon: Graducation,
            link: '/graduate-students'
        },
        {
            title: 'Academic Calendar',
            icon: Acadmic,
            link: '/academic-calender'
        },
        {
            title: 'Mail Box',
            icon: Mail,
            link: '/mail-box'
        }

    ]

    //dropdown menu
    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            </Menu.Item>
            <Menu.Item icon={<DownOutlined />} disabled>
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item (disabled)
                </a>
            </Menu.Item>
            <Menu.Item disabled>
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item (disabled)
                </a>
            </Menu.Item>
            <Menu.Item danger>a danger item</Menu.Item>
        </Menu>
    );


    return (
        <>
            <nav>
                <div className="nav-wrapper d-flex">

                    {/* vertical navbar  */}
                    <div className="vertical-nav-wrapper">
                        <div className="vertical-nav-item">
                            <div className="upper-logo">
                                <img src={Logo} alt="logo" />
                            </div>
                            <div className="main-links">
                                <ul className="p-0 ml-16">

                                    {buttonsList.map((button, index) => {
                                        return (
                                            <li key={index} className="mb-20">
                                                <NavLink to={button.link} activeClassName="active">
                                                    <img className="ms-2" src={button.icon} alt="icon" />
                                                    <span className="ms-2">{button.title}</span>
                                                </NavLink>
                                            </li>
                                        )
                                    })}

                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* horizontal navbar  */}
                    <div className="horizontal-nav-wrapper ml-14 border">
                        <div className="horizontal-nav-container d-flex  border border-danger">

                            <div className="user-info d-flex">
                                <img src={User} alt="logo" />
                                <p className="f-18 m-0">Hi,Abdullah! </p>
                            </div>

                            <div className="language-logout d-flex justify-content-between ml-47">

                                <div className="dropdown">
                                    <Dropdown overlay={menu}>
                                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            English <DownOutlined />
                                        </a>
                                    </Dropdown>
                                </div>
                                <div>
                                    <button className="btn">
                                        <span className="me-2"><LogoutIcon/></span>
                                        Logout
                                    </button>
                                </div>



                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;