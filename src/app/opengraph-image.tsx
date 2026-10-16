import { site } from "@/data/site";
import { shareImage, shareSize } from "@/lib/share-card";

export const alt = "Hamna Arshad, software developer at UET Lahore";
export const size = shareSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return shareImage(site.headline, "Software Developer · Full-Stack Development · AI/ML · UET Lahore");
}
