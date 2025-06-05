import { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=4`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => setData(prev => [...prev , ...arr ]));
  }, [pageNo]);

  useEffect(() => {
    const Observer = new IntersectionObserver((params) => {
      console.log(params);
      if (params[0].isIntersecting) {
        if (lastImage) Observer.unobserve(lastImage);
        setPageNo((prev) => prev + 1);
      }
    });

    const lastImage = document.querySelector(".image:last-child");
    if (!lastImage) return;
    Observer.observe(lastImage);

    return () => {
      if (lastImage) Observer.unobserve(lastImage);
      Observer.disconnect();
    };
  }, [data]);

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          padding: "1rem",
          height: "100%",
          maxHeight: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          alignItems: "center",
          overflowY: "auto",
        }}
      >
        {data.map((item) => (
          <img
            className="image"
            key={item.id}
            src={item.download_url}
            style={{
              width: "180px",
              height: "250px",
              objectFit: "cover",
              borderRadius: "7px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
