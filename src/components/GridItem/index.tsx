import React from "react";
import { GridItemType } from "../../types/GridItemType";
import b7Svg from "../../assets/svgs/b7.svg";
import { items } from "../../data/items";

import * as C from "./styles";

interface Props {
  item: GridItemType;
  onClick: () => void;
}

const GridItem: React.FC<Props> = ({ item, onClick }) => {
  return (
    <C.Container onClick={onClick}>
      {!item.permanentShown && !item.shown && <C.Icon src={b7Svg} alt="" />}
      {(item.permanentShown || item.shown) && item.item !== null && (
        <C.Icon src={items[item.item].icon} alt="" />
      )}
    </C.Container>
  );
};

export default GridItem;
