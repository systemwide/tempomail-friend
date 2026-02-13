import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AdBannerProps {
  className?: string;
  /** Ad slot size: "banner" (728x90), "rectangle" (300x250), "sidebar" (160x600), "social-bar", "native" */
  format?: "banner" | "rectangle" | "sidebar" | "social-bar" | "native";
  /** Auto-refresh interval in seconds. 0 = no refresh. Default 30. */
  refreshInterval?: number;
}

const AD_SIZE_MAP = {
  banner: { width: 728, height: 90 },
  rectangle: { width: 300, height: 250 },
  sidebar: { width: 160, height: 600 },
  "social-bar": { width: "auto", height: "auto" },
  native: { width: "100%", height: "auto" },
};

const AdBanner = ({ className, format = "native", refreshInterval = 30 }: AdBannerProps) => {
  const adRef = useRef<HTMLDivElement>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  // Soft-refresh ad unit on interval (the "dwell time" hack)
  useEffect(() => {
    if (refreshInterval <= 0) return;
    const timer = setInterval(() => {
      setRefreshKey((k) => k + 1);
    }, refreshInterval * 1000);
    return () => clearInterval(timer);
  }, [refreshInterval]);

  // Re-trigger ad scripts on refresh
  useEffect(() => {
    if (!adRef.current) return;
    // When an ad network script is added, it will look for these data attributes
    // to render ads. The refreshKey forces a re-mount.
    const event = new CustomEvent("ad-refresh", { detail: { slot: adRef.current } });
    window.dispatchEvent(event);
  }, [refreshKey]);

  const size = AD_SIZE_MAP[format];

  return (
    <div
      ref={adRef}
      key={refreshKey}
      className={cn(
        "mx-auto flex items-center justify-center overflow-hidden rounded-lg",
        format !== "social-bar" && "bg-muted/30 border border-border/50",
        className
      )}
      data-ad-format={format}
      data-ad-slot="" // Will be filled with Adsterra/PropellerAds slot ID
      style={{
        minWidth: typeof size.width === "number" ? `${Math.min(size.width, 320)}px` : undefined,
        maxWidth: typeof size.width === "number" ? `${size.width}px` : undefined,
        minHeight: typeof size.height === "number" ? `${size.height}px` : "50px",
      }}
    >
      {/* Ad network script will inject content here */}
      <span className="text-xs text-muted-foreground/40 select-none">Ad</span>
    </div>
  );
};

export default AdBanner;
