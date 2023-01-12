import React from "react";
import { slide as Menu } from "react-burger-menu";
import RewardList from "../../molecules/RewardList";

import "./index.css";

const Burger = () => {
  return (
    <Menu width="100%">
      <RewardList />
    </Menu>
  );
};

export default Burger;
