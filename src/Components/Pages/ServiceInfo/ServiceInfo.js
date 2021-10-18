import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceInfo = () => {
  const { slug } = useParams();
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, [slug]);
  const finded = info.filter((td) => td.key === parseInt(slug));
  console.log(info);
  return (
    <div>
      <h1>info for {slug}</h1>
      <img src={finded[0]?.img} alt="" />
      <h4>{finded[0]?.name}</h4>
      <p>{finded[0]?.desc}</p>
    </div>
  );
};

export default ServiceInfo;
