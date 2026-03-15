import React from "react";

// Messages
export default function Messages() {
  return (
    <div className="flex flex-col items-center mt-[clamp(0px,12.35svh-86.42px,40px)] md:mt-[clamp(0px,calc(12.35svh_-_86.42px),40px)]">
      <h1 className="text-[clamp(32px,4vw,56px)] md:text-[clamp(54px,4vw,68px)] text-center font-space font-bold text-[#2D3436] tracking-tight leading-tight">
        Konnichiwa! I’m Ivan
      </h1>

      <p className="text-[clamp(16px,2vw+9px,28px)] mt-1 text-center text-[#2D3436] font-jakarta font-medium">
        I am a Computer Engineering Student
      </p>

      <p className="text-[#2D3436] max-w-[clamp(650px,100vw,1000px)] mt-[clamp(20px,17.86svh-122.86px,60px)] leading-relaxed text-[clamp(12px,1.2vw+6px,18px)] text-center font-jakarta font-normal">
        I’m a 3rd-year CpE student who just likes making things work. My
        projects range from full-stack Next.js sites and Godot games to
        custom-soldered PCBs and Arduino prototypes.
      </p>
    </div>
  );
}
