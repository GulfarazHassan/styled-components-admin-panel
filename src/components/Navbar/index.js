import React from "react";
import {
  Nav,
  NavIconsWrapper,
  NavSearch,
  NavSearchIcon,
  NavSearchInput,
  NavSupportIcon,
  NavChatIcon,
  NavNotificationIcon,
  NavDropdown,
  NavDropdownText,
  NavDropdownIcon,
  ItemsWrapper,
  StatusWrapper,
} from "./NavbarElements";
import Img from "../../assets/Images/Avatar.png";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavSearch>
          <NavSearchIcon />
          <NavSearchInput
            placeholder={"Search transactions, invoices or help"}
          />
        </NavSearch>
        <NavIconsWrapper>
          <NavSupportIcon />
          <NavChatIcon />
          <NavNotificationIcon />
          <NavDropdown>
            <NavDropdownText>UĞUR ATEŞ</NavDropdownText>
            <NavDropdownIcon />
          </NavDropdown>
          <img src={Img} style={{ height: 45, width: 46 }} />
        </NavIconsWrapper>
      </Nav>
      <ItemsWrapper>
        <StatusWrapper></StatusWrapper>
      </ItemsWrapper>
    </>
  );
};

export default Navbar;
