import Header from "/src/components/Header";
import Carousel from "/src/components/Carousel";

function Event20() {
  return (
    <>
      <Header />
      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        {/* <Carousel images={["", "", ""]} title="" description="" date="" /> */}
        <Carousel
          images={["/assets/events20/rap.png"]}
          title="Rural awareness Programme "
          description="Induced interest in agriculture and trained them to use technology in agriculture"
          date="31st March, 2021"
        />
        <Carousel
          images={[
            "/assets/events20/shamp1.jpg",
            "/assets/events20/shamp2.jpg",
          ]}
          title="Soil health analysis and management of plant nutrition "
          description="Trained to improve economic stability and good health of agricultural ecosystem."
          date="1st March, 2021"
        />
        <Carousel
          images={["/assets/events20/ap1.jpg"]}
          title="Arduino Programming "
          description="Provided hands-on experience in using embedded and software tools"
          date=" 5th – 6th March, 2021 "
        />
        <Carousel
          images={[
            "/assets/events20/swpe1.jpg",
            "/assets/events20/swpe2.jpg",
            "/assets/events20/swpe3.jpg",
            "/assets/events20/swpe4.jpg",
          ]}
          title="Specifications, Wiring and Protection of Electrical Appliances  "
          description="Enhanced knowledge on various protection and specifications in  electrical wiring "
          date="18th February, 2021"
        />
        <Carousel
          images={[
            "/assets/events20/tg1.jpg",
            "/assets/events20/tg2.jpg",
            "/assets/events20/tg3.jpg",
          ]}
          title="TechGeek Session"
          description="Signified the need for technical capabilities to become a successful entrepreneur"
          date="17th February, 2021 "
        />

        <Carousel
          images={["/assets/events20/img2.jpg"]}
          title="CODE – IT"
          description="Provided a platform to solve real world problems online using different coding languages."
          date="24th May, 2020 "
        />
        <Carousel
          images={["/assets/events20/img5.jpg"]}
          title="IDEATHON"
          description="Emphasized usage of technology to overcome the COVIDcrisis"
          date="14th May, 2020 "
        />
        <Carousel
          images={["/assets/events20/img1.jpg"]}
          title="Hackathon COVID 19"
          description="Provided a platform to innovate solution to combat COVID’19 crisis"
          date="12th May, 2020 "
        />
      </div>
    </>
  );
}

export default Event20;
