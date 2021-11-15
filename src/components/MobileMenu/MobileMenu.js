/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { keyframes } from 'styled-components';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label='Menu'>
        <ContentSide />
        <CloseButton onClick={onDismiss}>
          <Icon id='close' />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
        <Footer>
          <SubLink href='/terms'>Terms and Conditions</SubLink>
          <SubLink href='/privacy'>Privacy Policy</SubLink>
          <SubLink href='/contact'>Contact Us</SubLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const fadeInKeyframes = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInKeyframes = keyframes`
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;

  perspective: 1000px;
  transform-style: preserve-3d;

  will-change: opacity;
  --overlay-fadein-duration: 200ms;
  animation: ${fadeInKeyframes} var(--overlay-fadein-duration) ease-in;
  animation-fill-mode: both;
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;

  will-change: transform;
  transform-origin: center right;

  --content-slidin-duration: 500ms;
  animation: ${slideInKeyframes} var(--content-slidin-duration) ease-in-out;
  animation-delay: var(--overlay-fadein-duration);
  animation-fill-mode: both;
`;

const ContentSide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 10%;

  transform: rotateY(90deg) translateX(-50%);
  background: var(--color-secondary);
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }

  will-change: opacity;

  --navlink-fadein-duration: 200ms;
  animation: ${fadeInKeyframes} var(--navlink-fadein-duration) ease-out;
  animation-delay: calc(
    var(--overlay-fadein-duration) + var(--content-slidin-duration)
  );
  animation-fill-mode: both;
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
