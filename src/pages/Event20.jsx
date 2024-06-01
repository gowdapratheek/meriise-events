import Header from "/src/components/Header";
import Carousel from "/src/components/Carousel";

function Event20() {
  return (
    <>
      <Header />
      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        {/* <Carousel images={["", "", ""]} title="" description="" date="" /> */}

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
