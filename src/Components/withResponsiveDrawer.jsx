import React from "react";
import ResponsiveDrawer from "./Drawer";

const withResponsiveDrawer = (Component) => {
  return (props) => (
    <ResponsiveDrawer>
      <Component {...props} />
    </ResponsiveDrawer>
  );
};

export default withResponsiveDrawer;
