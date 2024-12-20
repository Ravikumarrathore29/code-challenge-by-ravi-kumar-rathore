import React, { useState, FC } from "react";
import { convertToCapital } from '../utils/firstAlpabetCapital';
import { IVirtualListProps } from './List.type';

const VirtualizedList: FC<IVirtualListProps> = ({ list, height, width, itemHeight }) => {
  const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);

  const handleScroll = (e:any) => {
    const { scrollTop } = e.target;
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = newStartIndex + Math.floor(height / itemHeight);
    setIndices([newStartIndex, newEndIndex]);
  };

  const visibleList = list.slice(indices[0], indices[1] + 1);

  return (
    <div
      className="container"
      onScroll={handleScroll}
      style={{ height, width, background: "grey", overflow: "auto" }}
    >
      <div style={{ height: list.length * itemHeight, position: "relative" }}>
        {visibleList.map((item, index) => {
          return (
            <div
              key={index + "_" + item.name}
              className="item"
              style={{
                height: itemHeight,
                background: (index % 2 == 0) ? "#dedede" : "#e9fafd",
                borderTop: "5px solid grey",
                position: "absolute",
                top: (indices[0] + index) * itemHeight,
                width: "100%",
                textAlign: "center",
                color: "black",

              }}
            >
              {convertToCapital(item.name)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VirtualizedList