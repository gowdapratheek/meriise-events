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
        
        <Carousel
          images={[
            "/assets/events26/Catalyzing.jpg",
          ]}
          title=" IGNITE — Catalyzing Innovation through Interdisciplinary Project-Based Learning✨"
          description=" ME-RIISE FOUNDATION successfully organized a two-day faculty development program on 17 & 
          20 February 2026 at Malnad College of Engineering. The program was facilitated by Dr. Geetha Kiran A., 
          CEO, ME-RIISE FOUNDATION & Dean (Corporate Affairs), MCE, who guided faculty on the structured planning 
          and execution of interdisciplinary projects for second-semester students.Five interdisciplinary faculty 
          teams developed and presented innovative project proposals, demonstrating strong collaboration, 
          creativity, and commitment to experiential learning. The projects were evaluated by the Director and the 
          Dean (Academic Affairs), who provided valuable suggestions for further refinement.This initiative marks 
          a significant step toward fostering innovation-driven, outcome-based education and preparing students 
          for real-world problem solving."
          date=" 17th & 20th February 2026"
        />
      </div>
    </>
  );
}
