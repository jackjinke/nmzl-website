import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

export default class SiteNavBar extends Component {
    render() {
        return (
            // Apply navbar-nobottom
            <Navbar inverse fixedTop fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/index.html">NMZL</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem href='/players.html'>
                            <span>Players</span>
                        </NavItem>
                        <NavItem href='/matches.html'>
                            Matches
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem href='https://discord.gg/SQApN6F'>
                            Join us in Discord!
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}