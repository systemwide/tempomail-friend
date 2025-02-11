
import { cn } from "@/lib/utils";

interface AdBannerProps {
  className?: string;
}

const AdBanner = ({ className }: AdBannerProps) => {
  return (
    <div 
      className={cn("max-w-xl mx-auto p-4 glass rounded-lg text-center fade-in", className)}
      data-ad-slot="banner-slot" // Add this for ad networks to target
      data-ad-format="auto" // Responsive ad format
    >
      <div id="ad-container" className="min-h-[100px]">
        <p className="text-sm text-gray-500">Advertisement Space</p>
        {/* Ad network script will inject content here */}
      </div>
    </div>
  );
};

export default AdBanner;
