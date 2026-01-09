import React from "react";

const Cover = ({ coverImg, title }) => {
  const coverImgStyle = {
    backgroundImage: `url(${coverImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  };

  return (
    <div className="h-full w-full" style={coverImgStyle}>
      <div className="h-full w-full flex flex-col justify-center items-center bg-black/30 backdrop-blur-[1px] page-shadow p-6 text-center border-l-4 border-l-black/20">
        <div className="border-4 border-primary/60 p-4 md:p-8 rounded-lg bg-black/40 backdrop-blur-sm">


          <h1 className="text-primary text-5xl md:text-6xl font-bold font-heading tracking-wide uppercase drop-shadow-lg">
            {title}
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto my-4 rounded-full"></div>
          <p className="text-white/90 text-xl font-light tracking-widest font-body uppercase">
            Portfolio
          </p>
          <p className="text-white/60 text-sm mt-8 italic font-serif">
            NextGenX

          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;

