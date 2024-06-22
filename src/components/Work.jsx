import React from "react";

var images = [
  {
    url:
      "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
    top: "50%",
    left: "50%",
    isActive: true,
  },
  {
    url:
      "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
    top: "52%",
    left: "45%",
    isActive: false,
  },
  {
    url:
      "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
    top: "45%",
    left: "55%",
    isActive: false,
  },
  {
    url:
      "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
    top: "53%",
    left: "50%",
    isActive: false,
  },
  {
    url:
      "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
    top: "48%",
    left: "57%",
    isActive: false,
  },
  {
    url:
      "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
    top: "52%",
    left: "54%",
    isActive: false,
  },
];

function Work() {
  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto text-center ">
        <h1 className="text-[32vw] font-santoshi font-medium leading-none select-none ">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (ele, index) =>
              ele.isActive === true && (
                <img
                  key={index}
                  className="absolute w-80 rounded-md object-cover -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: ele.top, left: ele.left }}
                  src={ele.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
