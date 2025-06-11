import { Analytics } from "@vercel/analytics/react";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Smile from "../../components/smileComp3/smile";
import Awards from "../../components/awards/Awards";
// import BeforAfter from "../../components/beforeAfter/BeforAfter";
import SmileSol from "../../components/smileSol/SmileSol";
import Clinics from "../../components/locationOfClinics/Clinics";
// import { YTvideo } from "../../components/Vidio/YTvideo";
import ContactForm from "../../components/form/ContactForm";
import ImplantsCounter from "../../implantCount/ImplantsCounter";

export const Prathamesh = (): JSX.Element => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Implants Counter Section */}
      <ImplantsCounter />

      {/* About Section */}
      <About />

      {/* Smile Transformation Section */}
      <Smile />

      {/* Awards Section */}
      <Awards />



      {/* Gallery Section */}
      {/* <BeforAfter /> */}

      {/* Smile Solution */}
      <SmileSol />

      {/* Clinics Location */}
      <Clinics />

      {/* YT Video */}
      {/* <YTvideo /> */}

      {/* Form */}
      <ContactForm />

      {/* Analytics */}
      <Analytics />
    </div>
  );
};
