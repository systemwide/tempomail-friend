
import { cn } from "@/lib/utils";

interface AdBannerProps {
  className?: string;
}

const AdBanner = ({ className }: AdBannerProps) => {
  return (
    <div 
      className={cn("max-w-xl mx-auto p-4 glass rounded-lg fade-in", className)}
      data-ad-format="auto"
    />
  );
};

export default AdBanner;
