import { useState } from "react";

const Main = ({ data }: any) => {
  console.log(data);

  const [reply, setReply] = useState(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "3rem" }}>
        <span style={{ color: "Black", fontWeight: 600 }}>{data?.name}</span>
        <span
          onClick={() =>
            setReply((prev) => (prev === data?.name ? null : data?.name))
          }
          style={{ cursor: "pointer", color: "skyblue", marginLeft: "3rem" }}
        >
          {reply === null ? "Reply" : "Cancel"}
        </span>
        <span style={{ cursor: "pointer", color: "Red" }}>Delete</span>
      </div>
      {reply === data?.name && (
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
          />
          <button
            style={{
              outline: "none",
              background: "blue",
              width: "fit-content",
            }}
          >
            Post Reply
          </button>
        </div>
      )}
      <div style={{ display: "flex", gap: "2.5rem" }}>
        <div style={{ borderLeft: "1px solid black" }}></div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {" "}
          {data?.children?.length > 0 &&
            data?.children.map((dataItem: any) => <Main data={dataItem} />)}
        </div>
      </div>
    </div>
  );
};

const NestedComment = () => {
  const data = {
    name: "File Explorer",
    type: "folder",
    children: [
      {
        name: "node_modules",
        type: "folder",
        children: [],
      },
      {
        name: "public",
        type: "folder",
        children: [
          {
            name: "index.html",
            type: "file",
          },
          {
            name: "favicon.ico",
            type: "file",
          },
          {
            name: "manifest.json",
            type: "file",
          },
          {
            name: "robots.txt",
            type: "file",
          },
        ],
      },
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "Components",
            type: "folder",
            children: [
              {
                name: "Header.js",
                type: "file",
              },
              {
                name: "Footer.js",
                type: "file",
              },
              {
                name: "App.js",
                type: "file",
              },
            ],
          },
          {
            name: "App.css",
            type: "file",
          },
          {
            name: "App.test.js",
            type: "file",
          },
          {
            name: "index.css",
            type: "file",
          },
          {
            name: "index.js",
            type: "file",
          },
          {
            name: "logo.svg",
            type: "file",
          },
          {
            name: "reportWebVitals.js",
            type: "file",
          },
          {
            name: "setupTests.js",
            type: "file",
          },
        ],
      },
      {
        name: ".gitignore",
        type: "file",
      },
      {
        name: "package.json",
        type: "file",
      },
      {
        name: "package-lock.json",
        type: "file",
      },
      {
        name: "README.md",
        type: "file",
      },
    ],
  };

  return (
    <div
      style={{
        // width: "100vw",
        minHeight: "100vh",
        padding: "2rem",
        backgroundColor: "white",
      }}
    >
      <Main data={data} />
    </div>
  );
};

export default NestedComment;
