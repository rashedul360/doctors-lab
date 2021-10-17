import React from "react";
import ClientCount from "../ClientCount/ClientCount";
import DoctorQUote from "../DoctorQUote/DoctorQUote";
import IntroSection from "../IntroSection/IntroSection";
import RegularDoctors from "../RegularDoctors/RegularDoctors";
import Services from "../Doctors/Doctors";

const HomePage = () => {
  return (
    <div>
      <IntroSection />
      <DoctorQUote />
      <ClientCount></ClientCount>
      <Services></Services>
      <RegularDoctors></RegularDoctors>
    </div>
  );
};

export default HomePage;
