"use client";

import * as Sections from "@/components/sections";

export default function Home() {
  return (
    <main>
      <section className="relative flex pt-16 sm:pt-20">
        <Sections.ProfileSidebar />

        {/* Right Content Area - Scrollable */}
        <div className="w-full lg:flex-1">
          <div className="min-h-screen px-6 sm:px-10 lg:px-16 xl:px-20 pl-8 sm:pl-6 lg:pl-10 xl:pl-7 py-16 lg:py-24 pt-4 lg:pt-20">

            <Sections.Introduction />

            <Sections.AboutMe />

            <Sections.Experience />

            <Sections.Education />

            <Sections.Skills />

            <Sections.Projects />

            <Sections.Contact />
          </div>
        </div>
      </section>
    </main>
  );
}
