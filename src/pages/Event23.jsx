import Header from "/src/components/Header";
import Carousel from "/src/components/Carousel";

function Event23() {
  return (
    <>
      <Header />
      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        {/* <Carousel images={["", "", ""]} title="" description="" date="" /> */}



        <Carousel
          images={["http://meriise.org/events23/avk.jpg"]}
          title="Empowering Holistic Education through Innovation "
          description="Deliberated various facts on the importance of Sustainable Development Goal - 4: Ensure Inclusive and Equitable Quality Education and lifelong learning opportunities for all. The objective of the event was to create an exposure on education through innovation, ideate solutions to real case scenarios and work with computer peripherals"
          date="24th January, 2023 "
        />

        <Carousel
          images={[
            "http://meriise.org/events23/dp1.png",
            "http://meriise.org/events23/dp2.png",
            "http://meriise.org/events23/dp3.jpg",
            "http://meriise.org/events23/dp4.jpg",
          ]}
          title="Visit to Deshpande Foundations "
          description="Exposure to a platform to transform ideas into reality."
          date="3rd  February, 2023"
        />
        <Carousel
          images={["http://meriise.org/events23/2.jpg"]}
          title="PRASTUTHI"
          description="Provided a platform for students to improve their presentation skills, time-management, and creativity through competition."
          date="7th  January 2023"
        />

        <Carousel
          images={["http://meriise.org/events23/1.jpg"]}
          title="Journey of an Alumnus and Future Career Demands"
          description="Exposure to various attributes and professional mastery that students need to develop in order to succeed in their chosen careers.          "
          date="4th  January 2023"
        />
      </div>
    </>
  );
}

export default Event23;
