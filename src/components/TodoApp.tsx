import { useEffect, useState } from "react";

const TodoApp = () => {
  const [inp, setInp] = useState("");

  const [list, setList] = useState<any[]>([]);

  const setterLocal = () => {
    localStorage.setItem("List", JSON.stringify(list));
  };

  const addItem = () => {
    console.log("FGHJKJGFg");
    const idx = list.length !== 0 ? list[list.length - 1].id + 1 : 1;

    setList((prev) => [...prev, { id: idx, title: inp, crs: false }]);
    setInp("");
    setterLocal();
  };

  const crossover = (Id: any) => {
    setList((prev) =>
      prev.map((item) => (item.id === Id ? { ...item, crs: !item.crs } : item))
    );
    setterLocal();
  };
  const deleteItem = (Id: any) => {
    setList((prev) => prev.filter((it) => it.id !== Id));
    setterLocal();
  };

  useEffect(() => {
    const storedList = localStorage.getItem("List");
    const id = storedList ? JSON.parse(storedList) : null;
    console.log("sdhcbdsc", id, storedList);
    if (id) setList(id);
    else setList([]);
  }, []);

  useEffect(() => {
       localStorage.setItem("List" , JSON.stringify(list))     
  },[list])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#034C53",
      }}
    >
      <div>
        <input
          style={{ fontSize: "1.5rem", padding: "1rem", margin: ".5rem" }}
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
        <button disabled={inp === ""} onClick={() => addItem()}>
          Add task
        </button>
      </div>
      <div style={{ padding: "1rem", width: "400px", fontSize: "1.5rem" }}>
        {list.map((item) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "space-between",
            }}
          >
            <span
              style={{ textDecoration: item.crs ? "line-through" : "none" }}
            >
              {item.title}
            </span>
            <div style={{ display: "flex", gap: "1rem" }}>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => crossover(item.id)}
              >
                ✓
              </span>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => deleteItem(item.id)}
              >
                ❌
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
