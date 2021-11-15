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
    <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content aria-label='Menu'>
        <InnerWrapper>
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
        </InnerWrapper>
      </Content>
    </Wrapper>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const swingIn = keyframes`
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(-1deg);
  }
`;

const Wrapper = styled(DialogOverlay)`
  --backdrop-fadein-duration: 500ms;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-backdrop);

  animation: ${fadeIn} var(--backdrop-fadein-duration) ease-in;
  animation-fill-mode: both;
`;

const Content = styled(DialogContent)`
  --overfill: 16px;
  background: white;
  width: calc(300px + var(--overfill));
  height: 100%;
  padding: 24px 32px;
  margin-right: calc(var(--overfill) * -1);

  transform-origin: center right;
  --content-slidin-duration: 500ms;
  will-change: transform;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    animation: ${swingIn} var(--content-slidin-duration) ease-in-out;
    animation-delay: var(--backdrop-fadein-duration);
    animation-fill-mode: both;
  }

  --innerwrapper-fadein-duration: 200ms;
  will-change: opacity;
`;

const InnerWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    animation: ${fadeIn} var(--innerwrapper-fadein-duration) ease-out;
    animation-delay: calc(
      var(--backdrop-fadein-duration) + var(--content-slidin-duration)
    );
    animation-fill-mode: both;
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: var(--overfill);
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
