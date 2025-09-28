import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";

import { CiSearch } from "react-icons/ci";
import { PiNotePencilThin } from "react-icons/pi";
import { VscBell } from "react-icons/vsc";

const Nav = styled.nav`
  border-bottom: 1px solid #f2f2f2;
  padding: 0.75rem 0;

  @media (min-width: 768px) {
    padding: 0.625rem 0;
  }

  @media (min-width: 1280px) {
    padding: 0.5rem 0;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 86%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 94%;
  }

  @media (min-width: 1280px) {
    width: 96%;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 18px;
  height: 14px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 30px;
  }

  span {
    display: block;
    height: 2px;
    width: 100%;
    border-radius: 2px;
    background-color: #8f8d8d;
  }
`;

const LogoHeading = styled.h1`
  all: unset;
  display: inline;
  line-height: 0;

  img {
    width: 116px;
    height: 35px;
  }
`;

const SearchWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    position: relative;
    display: block;
    background: #f9f9f9;
    border-radius: 20px;
    width: 100%;
    font-size: 0.875rem;
    color: #6b6b6b;
    margin-left: 0;

    @media (min-width: 1280px) {
      margin-left: 0.5rem;
    }

    .icon {
      position: absolute;
      top: 50%;
      left: 1rem;
      transform: translateY(-50%);
      @media (min-width: 1280px) {
        left: 0.75rem;
      }
    }
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 3.25rem;
  border: none;
  outline: none;
  color: #6b6b6b;
  background: transparent;
  font-size: 0.875rem;

  @media (min-width: 1280px) {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 3rem;
  }

  &::placeholder {
    color: #6b6b6b;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75rem;
  color: #6b6b6b;

  @media (min-width: 1280px) {
    gap: 2rem;
  }

  .search-mobile {
    @media (min-width: 768px) {
      display: none;
    }
  }

  .bell {
    display: none;
    @media (min-width: 768px) {
      display: inline;
    }
  }
`;

const WriteBtn = styled.div`
  display: none;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;

  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 1280px) {
    gap: 0.375rem;
    font-size: 0.875rem;
  }
`;

const Avatar = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #000;
  color: #fff;
  cursor: pointer;
`;

function Navigation() {
  return (
    <>
      <GlobalStyles />
      <Nav>
        <NavContainer>
          <Left>
            <Hamburger>
              <span />
              <span />
              <span />
            </Hamburger>

            <LogoHeading>
              <a href="#">
                <img src="/mediumLogo.PNG" alt="medium logo" />
              </a>
            </LogoHeading>

            <SearchWrapper>
              <CiSearch size={24} className="icon" />
              <SearchInput placeholder="Search" />
            </SearchWrapper>
          </Left>

          <Right>
            <CiSearch size={24} className="search-mobile" />

            <WriteBtn>
              <PiNotePencilThin size={26} />
              <span>Write</span>
            </WriteBtn>

            <VscBell size={25} className="bell" />

            <Avatar />
          </Right>
        </NavContainer>
      </Nav>
    </>
  );
}

export default Navigation;
