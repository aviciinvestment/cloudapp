import React from "react";
import ambassador from "../Assets/ambassador.jpeg";
import ambassador2 from "../Assets/ambassador2.jpeg";

const HomeLanding = () => {
  return (
    <div>
      <div>
        <img
          className="mix-blend-multiply w-full sm:hidden"
          src={ambassador}
          alt=""
        />
        <img
          className="mix-blend-multiply w-full sm:static absolute invisible sm:visible "
          src={ambassador2}
          alt=""
        />
      </div>

      <div className="my-[100px] text-white text-center absolute top-0 w-full">
        <h1 className="text-green-400">All-in-one-online banking</h1>
        <div className=" font-normal m-auto">
          <h1 className="sm:text-[50px] text-[30px]">
            Smart And Simple <br />
            Online Banking
          </h1>
          <p className="text-gray-400 ">
            with our secure online banking,
            <br /> you can manage your finances at <br />
            anywhere at anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeLanding;
