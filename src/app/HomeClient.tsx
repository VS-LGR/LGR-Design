"use client";

import {
  HomeContactCta,
  HomeFeaturedProjects,
  HomeHero,
  HomeSkills,
} from "@/components/home/HomeSections";

export function HomeClient() {
  return (
    <div className="animate-in">
      <HomeHero />
      <HomeFeaturedProjects />
      <HomeSkills />
      <HomeContactCta />
    </div>
  );
}
