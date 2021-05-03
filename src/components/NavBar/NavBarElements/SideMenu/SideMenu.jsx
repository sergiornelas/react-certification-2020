import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../../../providers/Auth/Auth.provider';
import { NonAuthenticatedElements } from './NonAuthenticatedElements';
import { AuthenticatedElements } from './AuthenticatedElements';

export const Backdrop = styled.div`
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

const SideMenu = ({ sideElement, toggleSideBar }) => {
  const { authenticated } = useAuth();
  const SideBarElements = () => {
    return (
      <>
        {authenticated ? (
          <AuthenticatedElements toggleSideBar={toggleSideBar} />
        ) : (
          <NonAuthenticatedElements toggleSideBar={toggleSideBar} />
        )}
      </>
    );
  };

  return (
    <>
      {sideElement ? (
        <>
          <Backdrop onClick={toggleSideBar} />
          <SideBarElements />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default SideMenu;
