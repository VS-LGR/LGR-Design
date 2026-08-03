"use client";

import {
  HomeContactCta,
  HomeFeaturedProjects,
  HomeHero,
  HomeProcess,
  HomeSkills,
} from "@/components/home/HomeSections";

export function HomeClient() {
  return (
    <div className="animate-in">
      <HomeHero />
      <HomeFeaturedProjects />
      <HomeProcess />
      <HomeSkills />
      <HomeContactCta />
    </div>
  );
}
