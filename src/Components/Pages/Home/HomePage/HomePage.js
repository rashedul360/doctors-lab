import React from "react";
import ClientCount from "../ClientCount/ClientCount";
import DoctorQUote from "../DoctorQUote/DoctorQUote";
import IntroSection from "../IntroSection/IntroSection";
import Brances from "../Brances/Brances";
import Services from "../Services/Services";

const HomePage = () => {
  return (
    <div>
      {/* home page components  */}
      <IntroSection />
      <DoctorQUote />
      <Brances />
      <ClientCount></ClientCount>
      <Services></Services>
    </div>
  );
};

export default HomePage;
