import React from "react";
import notFound from "../../Images/notFound.svg";
const NotFound = () => {
  return (
    <div>
      {/* bot found image  */}
      <img className="img-fluid" src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
