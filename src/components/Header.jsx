import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, DropdownToggle, DropdownMenu, DropdownItem, Nav, Navbar, NavbarToggler, NavbarBrand, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState ({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="header">
        <style jsx>{`
            div.header {
              right: 0;
              top: 0;
              left: 0;
              padding: 1rem;
              background-color: lightgreen;
              text-align: center;
              font-family:sans-serif;
            }
          `}
        </style>
        <Navbar light expand="md">
          <NavbarBrand href="/"><h2>Zazu's House</h2></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink><Link to='/about'>About</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to='/volunteers'>Volunteers</Link></NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Gallery
                </DropdownToggle>
                <DropdownMenu left>
                  <Link to='/photos'>
                    <DropdownItem>
                      Photos
                    </DropdownItem>
                  </Link>
                  <Link to='/videos'>
                    <DropdownItem>
                      Videos
                    </DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink><Link to='/support'>Support</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to='/contact'>Contact</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to='/donate'>Donate Now</Link></NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
//.header position:absolute;
