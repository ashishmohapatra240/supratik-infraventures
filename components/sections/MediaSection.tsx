import MediaCard from "../cards/MediaCard";
import { mediaItems } from "@/data/media";

export default function MediaSection() {
  return (
    <section className="py-20 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {mediaItems.map((item, index) => (
            <MediaCard
              key={item.id}
              item={item}
              imagePosition={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
