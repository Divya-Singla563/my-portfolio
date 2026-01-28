"use client";

import * as Sections from "@/components/sections";

export default function Home() {
  return (
    <main>
      <section id="home" className="relative flex flex-col lg:flex-row pt-16 sm:pt-20">
        <Sections.ProfileSidebar />

        {/* Right Content Area - Scrollable */}
        <div className="w-full lg:flex-1">
          <div className="min-h-screen px-6 sm:px-10 lg:px-16 xl:px-20 lg:pl-10 xl:pl-7 py-8 sm:py-12 lg:py-24 lg:pt-20">

            <Sections.Introduction />

            <div id="about">
              <Sections.AboutMe />
            </div>

            <div id="experience">
              <Sections.Experience />
            </div>

            <Sections.Education />

            <Sections.Skills />

            <Sections.Projects />

            <div id="contact">
              <Sections.Contact />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
