import type { Metadata } from "next";
import { isSanityConfigured } from "@/sanity/env";
import { StudioClient } from "./studio-client";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Sanity Studio",
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <div style={{ padding: "3rem", fontFamily: "sans-serif", maxWidth: 640 }}>
        <h1>Sanity Studio not configured</h1>
        <p>
          Set <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and{" "}
          <code>NEXT_PUBLIC_SANITY_DATASET</code> in <code>.env.local</code>{" "}
          (see <code>.env.local.example</code>) once a real Sanity project
          exists — see <code>src/sanity/README.md</code>.
        </p>
      </div>
    );
  }

  return <StudioClient />;
}
