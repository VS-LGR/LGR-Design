import { HobbyCard } from "./HobbyCard";
import { hobbiesList } from "@/lib/hobbies";

export function HobbyGrid() {
  return (
    <div
      role="tabpanel"
      id="panel-hobbies"
      aria-labelledby="tab-hobbies"
      className="container mx-auto px-4 py-8 md:py-10"
    >
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 list-none p-0 m-0 max-w-4xl mx-auto">
        {hobbiesList.map((hobby) => (
          <li key={hobby.id}>
            <HobbyCard hobby={hobby} />
          </li>
        ))}
      </ul>
    </div>
  );
}
