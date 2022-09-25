import React from "react";

const Layout = ({ children, flex = false, gap = 0, alignItems = "center", wrap = false, justifyContent = 'center' }) => {
  const layoutClass = () => {
    let styleClass = ["layout"];
    if (flex) styleClass.push("layout--flex");
    return styleClass.join(" ");
  };

  const layoutStyle = {
    gap: `${gap}px`,
    alignItems,
    flexWrap: wrap ? 'wrap' : 'no-wrap',
    justifyContent
  }
  return (
    <div className={layoutClass()} style={layoutStyle}>
      {children}
    </div>
  );
};

export default Layout;
