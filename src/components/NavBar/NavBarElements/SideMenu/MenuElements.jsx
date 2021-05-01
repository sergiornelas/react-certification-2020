import styled from 'styled-components';

export const Menu = styled.nav`
  display: block;
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  background-color: brown;
  width: 65%;
  height: 100vh;
  color: white;
  @media (min-width: 750px) {
    width: 28%;
  }
`;

export const MenuDark = styled(Menu)`
  background-color: black;
`;

export const ListElements = styled.ul`
  width: 90%;
  height: 100%;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

export const ListElement = styled.li`
  margin: 1rem 0;
  &:hover {
    text-decoration: underline 2px;
  }
`;

export const Line = styled.hr`
  width: 100%;
  margin: 0;
  border: 0.1px solid rgb(230, 119, 119);
`;
