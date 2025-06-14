import { useRef, useState } from "react";

const DragNDrop = () => {
  const itemRef = useRef(null);
  const containerRef = useRef(null);
  const [initialData, setInitialData] = useState<any>({
    Todo: [
      "Design UI mockups",
      "Set up project repository",
      "Write unit test",
      "Integrate payment gateway",
    ],
    "In Progress": [
      "Develop authentication flow",
      "Implement responsive design",
    ],
    Completed: [
      "Set up CI/CD pipeline",
      "Conduct code reviews",
      "Deploy initial version to staging",
    ],
  });

  const handleDragEnd = (e: any) => {
    e.target.style.opacity = 1;
  };

  const handleDragStart = (e: any, item: any, initial: any) => {
    console.log(e, item, initial);
    e.target.style.opacity = 0.5;
    itemRef.current = item;
    containerRef.current = initial;
  };

  const handleDrop = (e: any, section: any) => {
    console.log(e, section);
    if(section ==  containerRef.current)
        return

    const copyData = { ...initialData };

    const initial = containerRef.current || "";
    const it = itemRef.current;

    copyData[initial] = copyData[initial].filter((item: any) => item !== it);
    copyData[section].push(it);
    console.log(copyData[initial]);
    setInitialData(copyData);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "80%",
        }}
      >
        {Object.keys(initialData).map((section) => (
          <div
            style={{
              display: "flex",
              backgroundColor: "#8DBCC7",
              flexDirection: "column",
              gap: "2rem",
              borderRadius: "5px",
            }}
            key={section}
            onDrop={(e) => handleDrop(e, section)}
            onDragOver={(e) => e.preventDefault()}
          >
            <h2>{section}</h2>
            <div style={{ flex: 1 }}>
              {initialData[section].map((item: any, index: any) => (
                <div
                  key={index}
                  draggable
                  onDragStart={(e: any) => {
                    handleDragStart(e, item, section);
                  }}
                  onDragEnd={(e: any) => handleDragEnd(e)}
                  style={{
                    margin: "1rem",
                    padding: "1rem 3rem",
                    backgroundColor: "white",
                    color: "black",
                    cursor: "move",
                    borderRadius: "5px",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragNDrop;
