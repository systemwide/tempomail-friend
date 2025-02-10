
import { cn } from "@/lib/utils";

interface AdBannerProps {
  className?: string;
}

const AdBanner = ({ className }: AdBannerProps) => {
  return (
    <div className={cn("max-w-xl mx-auto p-4 glass rounded-lg text-center fade-in", className)}>
      <p className="text-sm text-gray-500">Advertisement Space</p>
    </div>
  );
};

export default AdBanner;
