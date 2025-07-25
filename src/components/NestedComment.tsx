import { useState } from "react";

const Main = ({ data, commentId, deleteNode, addComment }: any) => {
  const comment = data[commentId];
  const [reply, setReply] = useState<number | null>(null);
  const [text, setText] = useState<string>("");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "3rem" }}>
        <span style={{ color: "black", fontWeight: 600 }}>
          {comment?.value}
        </span>
        <span
          onClick={() =>
            setReply((prev) => (prev === comment?.id ? null : comment?.id))
          }
          style={{ cursor: "pointer", color: "skyblue", marginLeft: "3rem" }}
        >
          {reply === null ? "Reply" : "Cancel"}
        </span>
        <span
          onClick={() => deleteNode(comment?.id , comment?.parentId)}
          style={{ cursor: "pointer", color: "red" }}
        >
          Delete
        </span>
      </div>

      {reply === comment?.id && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="text"
            placeholder="Write your reply..."
            style={{
              border: "2px solid gray",
              background: "white",
              padding: ".25rem",
              fontSize: "1.1rem",
              height: "30px",
              color: "black",
              borderRadius: "3px",
            }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            style={{
              outline: "none",
              background: "blue",
              width: "fit-content",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
            }}
            onClick={() => {
              setReply(null);
              setText("");
              addComment(text, comment?.id);
            }}
          >
            Post Reply
          </button>
        </div>
      )}

      {comment?.children?.length > 0 && (
        <div style={{ display: "flex", gap: "2.5rem" }}>
          <div style={{ borderLeft: "1px solid black" }}></div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {comment.children.map((childId: number) => (
              <Main
                key={childId}
                data={data}
                commentId={childId}
                deleteNode={deleteNode}
                addComment={addComment}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const NestedComment = () => {
  const [data, setData] = useState<any>({
    "1": {
      id: 1,
      parentId: null,
      value: "Hello Folks, How you doing?",
      children: [2, 3],
    },
    "2": {
      id: 2,
      parentId: 1,
      value: "Doing Great",
      children: [],
    },
    "3": {
      id: 3,
      parentId: 1,
      value: "Kaat rahe hai zindagani",
      children: [4],
    },
    "4": {
      id: 4,
      parentId: 3,
      value: "What's wrong?",
      children: [5],
    },
    "5": {
      id: 5,
      parentId: 4,
      value: "Nothing",
      children: [],
    },
  });

  const deleteNode = (Id: any , parentId:any) => {
      console.log(Id  , data[parentId])
       setData((prev:any) => {
        const dummy = {...prev}
       dummy[parentId].children = dummy[parentId].children.filter((id :any)=> id !== Id)

          const queue = [Id]
          while(queue.length > 0){
            const deleteToNode = queue.shift()
            queue.push(...dummy[deleteToNode].children)

            delete dummy[deleteToNode]

          }
        return dummy
       })
  };

  const addComment = (value: any, parentId: any) => {
    const newId = Object.keys(data).length + 1;

    setData((prev: any) => {
      prev[parentId].children.push(newId);
      return {
        ...prev,
        [newId.toString()]: {
          id: newId,
          parentId,
          value,
          children: [],
        },
      };
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "2rem",
        backgroundColor: "white",
      }}
    >
      <Main
        data={data}
        commentId={1}
        deleteNode={deleteNode}
        addComment={addComment}
      />
    </div>
  );
};

export default NestedComment;
