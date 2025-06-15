import { useState } from "react";

const FileUploader = () => {
  const [files, setFiles] = useState<any[]>([]);
  const [isDragging , setIsDragging] = useState(false)

  const handleChange = (e: any) => {
    const selectedFiles = e.target.files;
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const handleRemove = (name: any) => {
    setFiles((prev) => prev.filter((fi) => fi.name !== name));
  };


  const handleDragEnter = (e:any) =>{
    e.preventDefault()
    setIsDragging(true)
  }
   const handleDragLeave = (e:any) =>{
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e:any) => {
    e.preventDefault()
    const droppedFile = e.dataTransfer.files
        setFiles((prev) => [...prev, ...droppedFile]);
         setIsDragging(false)
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "white",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "start",
        alignItems: "center",
        color: "black",
      }}
    >
      <h2>React File Uploader</h2>
      <div
        style={{
          width: "40%",
          height: "150px",
          borderRadius: "10px",
          border: `3px dotted ${isDragging ? "green" : "gray"}`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          justifyContent: "center",
          background:`${isDragging ? "#B0DB9C20" :"transparent"}`
        }}

        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}

      >
        <p>Drag and Drop File here or</p>
        <input
          style={{ display: "none" }}
          type="file"
          multiple
          onChange={handleChange}
          id="input-file"
        />
        <label
          htmlFor="input-file"
          style={{ cursor: "pointer", fontWeight: 700 }}
        >
          Browse Files
        </label>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: ".75rem",
          width: "40%",
        }}
      >
        {files.map((file) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "5px",
              justifyContent: "space-between",
              borderRadius: "3px",
              background: "#EAEFEF40",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div style={{ display: "flex", gap: "1rem" }}>
              <img
                src={URL.createObjectURL(file)}
                style={{ width: "50px", aspectRatio: "1/1" }}
              />
              <div>
                <div style={{ fontWeight: "600" }}>{file.name}</div>
                <div style={{ textAlign: "start" }}>
                  {(file.size / 1024).toFixed(2)} KB
                </div>
              </div>
            </div>
            <div
              onClick={() => handleRemove(file.name)}
              style={{
                background: "red",
                cursor: "pointer",
                fontSize: ".7rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontWeight: 700,
                borderRadius: "50%",
                width: "1.5rem",
                aspectRatio: "1/1",
              }}
            >
              X
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUploader;
