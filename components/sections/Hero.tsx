import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="pt-20 min-h-5/6-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[200px] lg:h-[300px] order-1 lg:order-none">
            <Image
              src="/images/hero-image.png"
              alt="Modern Architecture"
              // fill
              className="object-cover rounded-lg"
              priority
              height={200}
              width={300}
            />
          </div>
          <div className="space-y-8">
            <p className="text-sm text-gray-600 max-w-xl">
              Transforming urban landscapes with innovative real estate
              solutions that blend luxury, sustainability, and community values.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="text" href="/explore">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
