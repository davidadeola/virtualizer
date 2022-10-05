import React from "react";
import { useSubLoad } from "../../hook/useRender";

const SomeItem = ({ containerSelector, item }) => {
  const [loaded, elementRef] = useSubLoad(containerSelector, true);

  return (
    <div className="items">
      <div className="itemList" ref={elementRef}>
        <div className="item">{item?.id + 1}</div>
        {loaded ? (
          <>
            <div className="item" {...item?.id}>
              {item?.firstName}
            </div>
            <div className="item" {...item?.id}>
              {item?.lastName}
            </div>
          </>
        ) : (
          <>
            <div className="item">...</div>
            <div className="item">...</div>
          </>
        )}
      </div>
    </div>
  );
};

export default SomeItem;
