import Header from "/src/components/Header";
import Carousel from "/src/components/Carousel";

function Event21() {
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
          title="Specifications, Wiring and Protection of Electrical Appliances"
          description="Enhanced knowledge on various protection and specifications in  electrical wiring"
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
          date="17th February, 2021"
        />
        <Carousel
          images={["/assets/events21/Picture1.jpg"]}
          title="Panel Discussion"
          description="Expressed their views on design thinking "
          date="24th August, 2021"
        />
        <Carousel
          images={[
            "/assets/events21/Picture6.jpg",
            "/assets/events21/Picture5.jpg",
          ]}
          title="Debate on Entrepreneurship"
          description="Expressed their choice of career"
          date="24th August, 2021"
        />
        <Carousel
          images={[
            "/assets/events21/Picture4.jpg",
            "/assets/events21/Picture3.jpg",
            "/assets/events21/picture2.jpg",
          ]}
          title="Impact lecture Series"
          description="Created an entrepreneurial ecosystem in the campus"
          date="7th  October, 2021"
        />

        <Carousel
          images={[
            "/assets/events21/Pragyatha1.jpg",
            "/assets/events21/Pragyatha2.jpg",
            "/assets/events21/Pragyatha3.jpg",
            "/assets/events21/Pragyatha4.jpg.png",
            "/assets/events21/Pragyatha5.jpg",
          ]}
          title="PRAGYATHA‘21 – State level Entrepreneurial fest"
          description="Enabled the students across the state to understand important phases of becoming an entrepreneur.
Developed skills through modern tools and software.
Instilled an entrepreneurial behaviour.
"
          date="7th  October, 2021"
        />






      </div>
    </>
  );
}

export default Event21;
