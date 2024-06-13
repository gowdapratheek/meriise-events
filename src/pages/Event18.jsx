import Header from "/src/components/Header";
import Carousel from "/src/components/Carousel";
function Event18() {
  return (
    <>
      <Header />
      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        {/* <Carousel images={["", "", ""]} title="" description="" date="" /> */}

        <Carousel
          images={["/assets/events18/eei.jpg"]}
          title="Empowering Entrepreneurship and Innovation"
          description="Students gained knowledge on entrepreneurship and were motivated towards entrepreneurial career."
          date="30th April, 2018 "
        />
        <Carousel
          images={["/assets/events18/lsc.jpg"]}
          title="MCE Learnathon and Super coders"
          description="Students were able to solve industry oriented problems"
          date="1st and 2nd July 2018"
        />
        <Carousel
          images={["/assets/events18/eepd.jpg"]}
          title="Visit to Entrepreneurial Establishments and Panel Discussion "
          description="Students were able to identify their prospective areas of work and gained knowledge on industry practices and regulations."
          date="17th  September 2018"
        />

          <Carousel
          images={["/assets/events18/ideation.jpg"]}
          title="Ideation"
          description="Able to create presentations on innovative project ideas that articulate and apply financial, operational, organizational, market, and sales knowledge to identify paths to value creation. "
          date="  13th  October 2018"
        />
      </div>
    </>
  )
}

export default Event18
