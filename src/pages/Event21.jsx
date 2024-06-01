import Header from "/src/components/Header";
import Carousel from "/src/components/Carousel";

function Event21() {
  return (
    <>
      <Header />
      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        {/* <Carousel images={["", "", ""]} title="" description="" date="" /> */}

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
          title="Debate on Entrepreneurship or job-what should engineers opt for?"
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

        {/* <Carousel
          images={[
            "/assets/events23/idea2.jpg",
            "/assets/events23/idea3.jpg",
            "/assets/events23/idea5.jpg",
            "/assets/events23/idea4.jpg",
            "/assets/events23/idea1.jpg",
          ]}
          title="From Ideas to Safe Guarding your Ideas"
          description="The event “From Ideas to Safe Guarding your Ideas” served as a catalyst, igniting knowledge on Intellectual property rights in innovation. The event focussed on fostering the students with the various stages of Innovation. 
"
          date="2nd November, 2023"
        /> */}
      </div>
    </>
  );
}

export default Event21;
