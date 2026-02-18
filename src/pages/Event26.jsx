// import React from 'react'
import Header from "/src/components/Header";
import Carousel from "/src/components/Carousel";
export default function Event25() {
  return (
    <>
      <Header />
      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        {/* <Carousel images={["", "", ""]} title="" description="" date="" /> */}
        <Carousel
          images={[
            "/assets/events26/BG10.jpg",
          ]}
          title=" Bridging Generations, Alumni Insights | Episode 10 ✨"
          description=" We were delighted to host Ms. Anu Chowdipura (Batch of 1991, CSE, Malnad College of Engineering) 
          for an inspiring and engaging session with our students. Her insights on embracing failure, self-growth, and 
          following one’s passion truly resonated with everyone.From her corporate journey to pursuing writing and 
          contributing to women empowerment, her story beautifully reflected resilience, purpose, and lifelong learning.
          The session left our students and faculty motivated and deeply inspired.Grateful for this meaningful 
          interaction and the inspiration shared. 🌱Kudos to the efforts of krishnaswamy subbarao and our CEO Geetha 
          Kiran A for the consistent efforts in bridging the young ones with our beloved alumni. Anu Chowdipura thank 
          you madam."
          date=" 24th January 2026"
        />
        
        
      </div>
    </>
  );
}
