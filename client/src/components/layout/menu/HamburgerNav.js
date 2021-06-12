import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const HamburgerMenu = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 2;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #fff;
    border-radius: 10px;
    transform-origin: 1px;
    transition: transform 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const HamburgerNav = () => {
  const [open, setOpen] = useState(false);

  const onOpenMenu = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <HamburgerMenu open={open} onClick={onOpenMenu}>
        <div />
        <div />
        <div />
      </HamburgerMenu>
      <RightNav open={open} setOpen={setOpen} />
    </Fragment>
  );
};

export default HamburgerNav;
