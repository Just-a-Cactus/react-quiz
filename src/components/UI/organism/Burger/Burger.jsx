import React from "react";
import { slide as Menu } from "react-burger-menu";
import RewardList from "../../molecules/RewardList";

import "./index.css";

const Burger = ({ money, index, buildScoreTitle }) => (
  <Menu width="100%">
    {money && (
      <RewardList
        money={money}
        index={index}
        buildScoreTitle={buildScoreTitle}
      />
    )}
  </Menu>
);

export default Burger;
