import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceInfo = () => {
  const { slug } = useParams();
  const [info, setInfo] = useState([]);
  // fetching data from server
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      // setData
      .then((data) => setInfo(data));
  }, [slug]);
  // find specefig data
  const finded = info.filter((td) => td.key === parseInt(slug));
  return (
    // use data to show on UI
    <div className="mt-5 mb-5">
      <h1 className="mb-5 container">
        information for <span>{finded[0]?.name}</span>{" "}
      </h1>
      <img className="img-fluid" src={finded[0]?.img} alt="" />
      <h4 className="mt-5">{finded[0]?.name}</h4>
      <p className="w-50 mx-auto text-start">{finded[0]?.desc}</p>
    </div>
  );
};

export default ServiceInfo;
