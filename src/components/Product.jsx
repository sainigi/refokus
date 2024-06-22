import React from "react";
import Button from "./Button";

function Product({val}) {
  return (
    <div className="w-full py-20">
      <div className="max-w-screen-xl m-auto flex items-center justify-between">
        <h1 className="text-6xl font-medium capitalize">{val.title}</h1>
        <div className="w-1/3 dets">
          <p className="mb-10">
            {val.description}
          </p>
          <div className="flex gap-5">
          {(val.live) && <Button />}
          {(val.case) && <Button title="Case Study"/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
