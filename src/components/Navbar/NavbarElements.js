import styled from "styled-components";
import { COLORS } from "../../res/Colors";
import { HiSupport, HiChevronDown } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
import { IoChatbubbles, IoChevronDownSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";

export const Nav = styled.nav`
  background: ${COLORS.white};
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
  box-shadow: 1px 0px 10px ${COLORS.grey};
`;

export const NavSearch = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

export const NavSearchIcon = styled(RiSearchLine)`
  color: ${COLORS.grey};
`;

export const NavSearchInput = styled.input`
  width: 100%;
  margin-left: 0.5rem;
  box-shadow: none;
  outline: none;
  border: 0;
  font-weight: 100;
`;

export const NavIconsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-width: 1;
`;

export const NavSupportIcon = styled(HiSupport)`
  margin: 0 1rem 0 1rem;
  color: ${COLORS.grey};
  height: 1.3rem;
  width: 1.3rem;
`;

export const NavChatIcon = styled(IoChatbubbles)`
  margin: 0 1rem 0 1rem;
  color: ${COLORS.grey};
  height: 1.3rem;
  width: 1.3rem;
`;

export const NavNotificationIcon = styled(IoIosNotifications)`
  margin: 0 1rem 0 1rem;
  color: ${COLORS.grey};
  height: 1.3rem;
  width: 1.3rem;
`;

export const NavDropdown = styled.div`
  height: 50%;
  width: 9rem;
  display: flex;
  border-width: 0px 0px 0px 1px;
  border-color: ${COLORS.grey};
  border-style: solid;
  align-items: center;
  justify-content: center;
`;

export const NavDropdownText = styled.p`
  margin: 0px;
  padding: 0px;
  font-weight: 300;
`;

export const NavDropdownIcon = styled(GoChevronDown)`
  margin-left: 0.4rem;
  color: ${COLORS.grey};
  height: 1.3rem;
  width: 1.3rem;
`;

export const ItemsWrapper = styled.div`
  height: 17rem;
  width: 17rem;
  padding: 1.5rem;
  margin-left: 10rem;
  box-shadow: 1px 3px 10px lightgray;
`;

export const StatusWrapper = styled.div`
  display: flex;
  height: 3rem;
  justify-content: center;
  border-width: 0px 0px 1px 0px;
  border-color: ${COLORS.light_grey};
  border-style: solid;
`;
