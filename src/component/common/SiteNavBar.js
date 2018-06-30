import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import '../../style/common/SiteNavBar.css';

export default class SiteNavBar extends Component {
    render() {
        return (
            <Navbar inverse fixedTop fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/index.html">
                            NMZL
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem href='/players.html'>
                            Players
                        </NavItem>
                        <NavItem href='/matches.html'>
                            Matches
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <li role='presentation'>
                            <a href='https://discord.gg/SQApN6F' className='NavBarLinkWithImg'>
                                Join us on <img className='NavItemImg' src='/img/Discord-Logo-Full-Small.png'
                                                alt='Discord'/>
                            </a>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}