import React from 'react';

export default function WorkProcess() {
  const steps = [
    {
      number: "01",
      title: "DISCOVER",
      description: "I learn about stakeholder needs, agency pain points, and administrative workflows."
    },
    {
      number: "02",
      title: "DEFINE",
      description: "I architect 3NF relational schemas, data flows, and role permission matrices."
    },
    {
      number: "03",
      title: "DESIGN",
      description: "I craft wireframes, responsive layouts, and intuitive UI that bring ideas to life."
    },
    {
      number: "04",
      title: "DEVELOP",
      description: "I write secure PHP/React code, REST endpoints, and implement ISO/IEC standards."
    },
    {
      number: "05",
      title: "DELIVER",
      description: "I test, refine, deploy to cloud (Vercel), and launch solutions that perform."
    }
  ];

  return (
    <section id="process" className="py-20 sm:py-28 px-5 sm:px-8 bg-[#121312] text-[#f5f5f0] border-b border-[#eae3d2]/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading matching reference */}
          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#eae3d2]/60 mb-1">
              MY PROCESS
            </p>
            <h2 className="font-condensed text-6xl sm:text-8xl font-bold tracking-tight text-[#7c8e77] uppercase leading-[0.88]">
              STEPS
            </h2>
          </div>

          {/* Right Column: 5 Columns with delicate connectors */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col">
                
                {/* Number + Horizontal connector line */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-editorial-serif text-2xl sm:text-3xl text-[#eae3d2] font-normal">
                    {step.number}
                  </span>
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex flex-1 items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#7c8e77]" />
                      <div className="flex-1 h-px bg-[#eae3d2]/20" />
                    </div>
                  )}
                </div>

                {/* Step Title */}
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#eae3d2] font-semibold mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-[#eae3d2]/70 leading-relaxed font-light">
                  {step.description}
                </p>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
