import { useEffect, useRef, useState } from "react";

const STATE = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
};

const Search = () => {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(STATE.LOADING);
  const [result, setResult] = useState<any[]>([]);
  const cache = useRef<any>({});

  useEffect(() => {
    const abortComtroller = new AbortController();
    const { signal } = abortComtroller;

    const fetchItems = async () => {
      try {
        setStatus(STATE.LOADING);
        if (cache.current[query]) {
          setResult(cache.current[query]);
          setStatus(STATE.SUCCESS);
          return;
        }

        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}&limit=10`,
          { signal }
        );
        const data = await res.json();
        const { products } = data;
        cache.current[query] = products;
        setStatus(STATE.SUCCESS);
        setResult(products);
      } catch (error) {
        setStatus(STATE.ERROR);
      }
    };

    const intId = setTimeout(fetchItems, 1000);

    return () => clearTimeout(intId);
  }, [query]);

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100vw",
        height: "100vh",
        paddingTop: "6rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "300px" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            outline: "none",
            width: "100%",
            backgroundColor: "gray",
            fontSize: "1.25rem",
            border: "none",
            borderRadius: "4px",
            padding: "6px",
          }}
        />
        {status == STATE.LOADING && (
          <div style={{ color: "black" }}>...Loading</div>
        )}
        {status == STATE.ERROR && (
          <div style={{ color: "red" }}>Error Occured</div>
        )}
        {status == STATE.SUCCESS && (
          <div>
            <ul>
              {result.map((product) => (
                <li
                  key={product.id}
                  style={{ color: "black", textAlign: "left" }}
                >
                  {product.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
