import { useEffect } from "react";

const Body = () => {
  console.log("[RENDER] Body component ");

  // useEffect cho sự kiện scroll
  // Performance: memory leak
  useEffect(() => {
    console.log("[UPDATING] Body component -> UseEffect runs");
    const handleScroll = () => {
      const position = document.documentElement.scrollTop;
      console.log("Scrolling position: ", position);
    };
    document.addEventListener("scroll", handleScroll);

    // Clean up function: DỌN DẸP tất cả những cái đăng ký
    // MUST REMEMBER: dọn dẹp tàn dư trước khi đi :))
    return () => {
      console.log("[UNMOUNTING] -  Body component [CLEAN UP] function runs");
      document.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      style={{
        border: "1px solid red",
        background: "#ececec",
      }}
    >
      Body component
    </div>
  );
};
export default Body;
