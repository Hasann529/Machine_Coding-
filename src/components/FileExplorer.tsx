import { useState } from "react";

const Explorer = ({ folderData}:any) =>{

      const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };

    return(
         <div>
      <h5 style={{display:"flex" , justifyContent:"start" , alignItems:"center" , marginLeft:"1rem"}} >
        {folderData.type === "folder" ? (showChildren ? "📂" : "📁") : "📄"}
        <span style={{cursor:"pointer" , margin:".5rem"}} onClick={handleClick}>{folderData["name"]}</span>
      </h5>
      <div style={{display:"flex" , gap:"2rem"}} >
        <div ></div>
        <div style={{display:"flex" , flexDirection:"column", borderLeft:"2px solid black"}}>
 {showChildren && folderData.children.length > 0 &&
        folderData?.children?.map((childData:any, index:any) => {
          return <Explorer key={index} folderData={childData} />;
        })}
        </div>
      </div>
     
    </div>
    )
}


const FileExplorer = () => {

const data = {
  "name": "File Explorer",
  "type": "folder",
  "children": [
    {
      "name": "node_modules",
      "type": "folder",
      "children": []
    },
    {
      "name": "public",
      "type": "folder",
      "children": [
        {
          "name": "index.html",
          "type": "file"
        },
        {
          "name": "favicon.ico",
          "type": "file"
        },
        {
          "name": "manifest.json",
          "type": "file"
        },
        {
          "name": "robots.txt",
          "type": "file"
        }
      ]
    },
    {
      "name": "src",
      "type": "folder",
      "children": [
        {
          "name": "Components",
          "type": "folder",
          "children": [
            {
              "name": "Header.js",
              "type": "file"
            },
            {
              "name": "Footer.js",
              "type": "file"
            },
            {
              "name": "App.js",
              "type": "file"
            }
          ]
        },
        {
          "name": "App.css",
          "type": "file"
        },
        {
          "name": "App.test.js",
          "type": "file"
        },
        {
          "name": "index.css",
          "type": "file"
        },
        {
          "name": "index.js",
          "type": "file"
        },
        {
          "name": "logo.svg",
          "type": "file"
        },
        {
          "name": "reportWebVitals.js",
          "type": "file"
        },
        {
          "name": "setupTests.js",
          "type": "file"
        }
      ]
    },
    {
      "name": ".gitignore",
      "type": "file"
    },
    {
      "name": "package.json",
      "type": "file"
    },
    {
      "name": "package-lock.json",
      "type": "file"
    },
    {
      "name": "README.md",
      "type": "file"
    }
  ]
}

  return (
    <div style={{
        minHeight:"100vh",
        background:"white",
        color:"black",
        display:"flex",
        padding:"1rem",
        fontSize:"1.24rem"

    }} >
    <Explorer folderData={data} />
    </div>
  )
}

export default FileExplorer
