import React, { forwardRef } from "react";

const Page = forwardRef((props, ref) => {
  return (
    <div className="demoPage overflow-hidden paper-texture" ref={ref} style={{
      borderRadius: '2px'
    }}>
      <div className="h-full w-full relative">

        {/* Paper texture overlay (optional, can be CSS pattern) */}

        <div className="h-full w-full p-0">  {/* Padding handled by inner components if needed */}
          {props.children}
        </div>

        <p className="absolute bottom-2 right-4 text-xs font-serif text-slate-400">
          {props.number}
        </p>
      </div>
    </div>
  );
});

export default Page;

