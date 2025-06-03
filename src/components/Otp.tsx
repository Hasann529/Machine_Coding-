import { useEffect, useRef, useState } from "react";

const Otp = () => {
  const focusRef: any = useRef(null);

  const [curr, setCurr] = useState(1);

  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, [curr]);

  const handleChange = (e: any, inp:any) => {
    const input = e.target;
  const value = input.value;
    if (!/^\d*$/.test(value)) {
    input.value = "";
    return;
  }
 

   const digits = e.target.value.replace(/\D/g, "");
  if (digits) {
    e.target.value = e.target.selectionStart <= 1 ? digits[0] : digits.slice(-1);
    setTimeout(() => e.target.setSelectionRange(1, 1), 0);
  }
  setCurr(inp+1)
  };

  const handleKey = (e: any, inp: any) => {
    if (e.key == "ArrowLeft") setCurr(inp - 1);
    if (e.key == "ArrowRight") setCurr(inp + 1);
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: "1rem" }}>
        {[1, 2, 3, 4, 5, 6].map((inp) => (
          <input
            key={inp}
            ref={curr == inp ? focusRef :   null}
            style={{ width: "2.5rem", fontSize: "2rem", aspectRatio: "1/1" }}
            onChange={(e) => {
           
              handleChange(e,inp);
            }}
            onKeyDown={(e) => handleKey(e, inp)}
          />
        ))}
      </div>
    </div>
  );
};

export default Otp;
