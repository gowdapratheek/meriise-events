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
            "/assets/events25/BG9.jpeg",
          ]}
          title=" Bridging Generations, Alumni Insights | Episode 9 ✨"
          description=" An inspiring session at Bridging Generations – Episode 9, hosted by ME-RIISE Foundation,
           Malnad College of Engineering, Hassan featuring Ms. Vijetha Shenoy (MCE Batch 2005), People Manager - 
           Talent Engagement @Infosys Finacle.The session beautifully highlighted that careers are built not just
           on degrees, but on mindset, empathy, and continuous learning. Key takeaways that truly resonated with
           our students:
          🔹 Listen before reacting
          🔹 Learn before demanding
          🔹 Respect before challenging
          Grateful for the reflections, real-world insights, and meaningful conversations that bridged generations
          and inspired young minds to think beyond roles and titles.Thank you, Ms. Vijetha Shenoy, for an engaging 
          and impactful session.. "
          date=" 27th December 2025"
        />
        
        
      </div>
    </>
  );
}
