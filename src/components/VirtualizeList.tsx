import { useState } from "react";

const Virtual = ({ list, height, width, listHeight }: any) => {
  const [indices, setIndices] = useState([0, Math.floor(height / listHeight)]);
  const visibleList = list.slice(indices[0], indices[1] + 1);

  const handleScroll = (e: any) => {
    const { scrollTop } = e.target;

    const newStartIndex = Math.floor(scrollTop / listHeight);
    setIndices([
      newStartIndex,
      newStartIndex + Math.floor(height / listHeight),
    ]);
  };

  return (
    <div
      style={{
        height,
        width,
        overflow: "auto",
        overflowX:"hidden"
      }}
      onScroll={handleScroll}
    >
      <div
        style={{ height: list.length * listHeight, backgroundColor: "#644A07" , position:"relative" }}
      >
        {visibleList.map((item :any, index:any) => (
          <div
          key={index}
            style={{
              height: listHeight,
              backgroundColor: "#F564A9",
              border: "1px solid black",
              margin: ".1rem",
              position:"absolute",
              width:"100%",
              top:(indices[0]+index)*listHeight 
            }}
          >
            Item {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const VirtualizeList = () => {
  const listArray = Array.from({ length: 10000 }, (_, index) => index + 1);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#332D56",
      }}
    >
      <Virtual list={listArray} height={400} width={300} listHeight={35} />
    </div>
  );
};

export default VirtualizeList;
