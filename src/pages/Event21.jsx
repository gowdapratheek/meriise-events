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
      </div>
    </>
  );
}

export default Event21;
