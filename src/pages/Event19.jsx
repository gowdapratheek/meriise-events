import Header from "/src/components/Header";
import Carousel from "/src/components/Carousel";
function Event19() {
  return (
    <>
      <Header />
      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        {/* <Carousel images={["", "", ""]} title="" description="" date="" /> */}


        <Carousel
          images={["/assets/events19/manthan.jpg"]}
          title="MANTHAN-2020"
          description="Expressed great enthusiasm in developing business plan and participating in the MANTHAN-2020 organized by FKCCI"
          date="27th November, 2019"
        />
        
        <Carousel
          images={["/assets/events19/pragyatha.jpg"]}
          title="PRAGYATHA'19 – State level Entrepreneurial Fest"
          description="Enabled the students across the state to know the importance phases of becoming an entrepreneur Developed skills
           learning modern tools and Software's Instilled an entrepreneurial behaviour"
          date="8th to 10th November, 2019"
        />
        
        <Carousel
          images={["/assets/events19/opl.jpg"]}
          title="Outreach Programme and lateral thinking"
          description="Prepared for achieving the goals set Understood emotions Developed problem solving capability "
          date="14th October 2019"
        />

        
        <Carousel
          images={["/assets/events19/ideathon.jpg"]}
          title="Ideathon-19"
          description="Built collaborative capability of budding engineers to drive results, making a difference"
          date="12th October 2019"
        />


        <Carousel
          images={["/assets/events19/Capacity.jpg"]}
          title="Capacity Building and Entrepreneurship Development"
          description="Enhanced clarity, focus, creativity, confidence and productivity of the individual"
          date="12th October 2019"
        />

        <Carousel
          images={["/assets/events19/Boot.jpg"]}
          title="Boot Camp"
          description="Understood the basics of entrepreneurship from experienced trainers"
          date="14th September 2019"
        />


        <Carousel
          images={["/assets/events19/Sales.jpg"]}
          title="Salesforce Developer 402"
          description="Mastered the concepts of being a Salesforce Administrator and a Salesforce Platform App builder
Implement automation, security, debugging, data validation and customize apps
Developed new applications and configure user interface"
          date="9th to 14th September 2019"
        />


        <Carousel
          images={["/assets/events19/igi.jpg"]}
          title="Idea Generation to Incubation"
          description="Identify personal attributes that enable best use of entrepreneurial opportunities
Students advanced their skills in utilizing design thinking and process tools to evaluate real- world problems and projects"
          date="7th May 2019"
        />

        <Carousel
          images={["/assets/events19/revit.jpg"]}
          title="Revit Architecture"
          description="Created more accurate and optimized building designs"
          date="9th to 13th April 2019"
        />
        

        <Carousel
          images={["/assets/events19/mrpl.jpg" , "/assets/events19/mrpl2.jpg" , "/assets/events19/mrpl3.jpg"]}
          title="Visit to MRPL and Incubation centre Visit - Mangalore"
          description="Develop skills in dismantling and identifying different components of various product , Become more awareness
          of industry practices and regulations,
          Acquired knowledge about the operation of an incubation centre and the products developed ,
          Know how to establish an incubation centre"
          date="1st April 2019"
        />

        <Carousel
          images={["/assets/events19/poc.jpg"]}
          title="Proof of Concept"
          description="Students advanced their skills in customer development, customer validation, competitive analysis, and iteration while utilizing design thinking and process tools to evaluate real-world problems"
          date="  23rd March 2019"
        />

        <Carousel
          images={["/assets/events19/f360.jpg"]}
          title="Fusion 360"
          description="Students solved engineering challenges faster using 3D Modeling tools"
          date="18th and 19th February 2019"
        />

      </div>
    </>
  )
}

export default Event19
