import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import prerender from "@prerenderer/rollup-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    prerender({
      routes: [
        "/",
        "/about",
        "/features",
        "/blog",
        "/blog/disposable-emails-data-breaches",
        "/blog/ten-situations-temporary-email",
        "/blog/email-tracking-how-to-stop",
        "/blog/temporary-email-vs-email-aliases",
        "/blog/keep-inbox-clean-organized",
        "/blog/hidden-cost-giving-email-address",
        "/blog/privacy-matters",
        "/blog/online-security",
        "/blog/fighting-spam",
        "/blog/email-privacy-services",
        "/faq",
        "/privacy",
        "/terms",
        "/contact",
      ],
      renderer: "@prerenderer/renderer-puppeteer",
      rendererOptions: {
        renderAfterTime: 5000,
        skipThirdPartyRequests: true,
      },
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html
          .replace(/(https?:\/\/)?(localhost|127\.0\.0\.1):\d+/gi, "")
          .replace(/<ins class="adsbygoogle[\s\S]*?<\/ins>/gi, "")
          .replace(/<iframe[^>]*google[^>]*>[\s\S]*?<\/iframe>/gi, "")
          .replace(/<iframe[^>]*aswift[^>]*>[\s\S]*?<\/iframe>/gi, "")
          .replace(/<meta http-equiv="origin-trial"[^>]*>/gi, "")
          .replace(/<script[^>]*adsbygoogle[^>]*>[\s\S]*?<\/script>/gi, "")
          .replace(/<script[^>]*show_ads_impl[^>]*>[\s\S]*?<\/script>/gi, "");
        return renderedRoute;
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
