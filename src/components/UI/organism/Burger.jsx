import React from "react";
import { slide as Menu } from "react-burger-menu";
import styled from "styled-components";
import theme from "../theme/theme";
import RewardList from "../molecules/RewardList";
import LabelButton from "../atoms/LabelButton";

const Burger = () => {
  return (
    <StyledDiv>
      <Menu width={"100%"}>
        <RewardList>
          <LabelButton title={"$1,000"} />
        </RewardList>
      </Menu>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  /* Position and sizing of burger button */

  .bm-burger-button {
    position: fixed;
    width: 24px;
    height: 24px;
    right: 16px;
    top: 16px;
  }

  /* Color/shape of burger icon bars */

  .bm-burger-bars {
    background: ${theme.palette.burger.buttons};
    border-radius: 10px;
    height: 2px !important;
  }

  /* Color/shape of burger icon bars on hover*/

  .bm-burger-bars-hover {
    background: #a90000;
  }

  /* Position and sizing of clickable cross button */

  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */

  .bm-cross {
    background: ${theme.palette.burger.buttons};
    width: 2px !important;
  }

  /*
  Sidebar wrapper styles
  Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */

  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */

  .bm-menu {
    background: ${theme.palette.burger.bgColor};
    //padding: 2.5em 1.5em 0;
    //font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */

  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */

  .bm-item-list {
    color: #b8b7ad;
    display: flex;
    align-items: center;
    //padding: 0.8em;
  }

  /* Individual item */

  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

  /* Individual item */

  .bm-item {
    display: inline-block;

    color: #d1d1d1;
    margin-bottom: 10px;
    text-align: left;
    text-decoration: none;
    transition: color 0.2s;
  }

  .bm-item:hover {
    color: #ffffff;
  }

  @media print, screen and (min-width: 1440px) {
    display: none;
  }
`;

export default Burger;
