import { useEffect, useState } from "react";

const ToastPop = ({ toast, onClose }: any) => {
  useEffect(() => {
    const timer = setTimeout(
      () => onClose(toast.id),
      3000 - (Date.now() - toast.timestamp)
    );
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  const colors: any = {
    green: "#10b981",
    blue: "#3b82f6",
    yellow: "#f5850b",
    red: "#ef4444",
  };

  return (
    <div
      style={{
        minWidth: "200px",
        fontWeight: 600,
        borderRadius: "7px",
        padding: "18px 16px",
        backgroundColor: colors[toast.color],
        display: "flex",
        animation: "slideIn 0.3s ease-out",
      }}
    >
      <span>{toast.name} Message</span>
      <span
        style={{ cursor: "pointer", marginLeft: "auto" }}
        onClick={() => onClose(toast.id)}
      >
        X
      </span>
    </div>
  );
};

const Toast = () => {
  const [activeToast, setActiveToast] = useState<any[]>([]);
  const toastArray = [
    { name: "Success", color: "green" },
    { name: "Info", color: "blue" },
    { name: "Warning", color: "yellow" },
    { name: "Error", color: "red" },
  ];

  const addToast = (toast: any) => {
    setActiveToast((prev) => [
      ...prev,
      { ...toast, id: Date.now(), timestamp: Date.now() },
    ]);
  };

  const removeToast = (id: any) => {
    setActiveToast((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <>
      <style>
        {`
        @keyframes slideIn {from { transform:translateX(100%); opacity:0; }}
        `}
      </style>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {toastArray.map((toast) => (
          <button style={{ width: "200px" }} onClick={() => addToast(toast)}>
            {toast.name} Toast
          </button>
        ))}
      </div>
      <div
        style={{
          position: "fixed",
          zIndex: 1000,
          top: "20px",
          right: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {activeToast.map((at) => (
          <ToastPop toast={at} onClose={removeToast} />
        ))}
      </div>
    </>
  );
};

export default Toast;
