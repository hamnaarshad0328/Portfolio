import { getProject } from "@/data/projects";
import { shareImage, shareSize } from "@/lib/share-card";

export const alt = "Featured project by Hamna Arshad";
export const size = shareSize;
export const contentType = "image/png";

export default async function ProjectOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  return shareImage(
    project?.title ?? "Featured project",
    project?.summary ?? "Hamna Arshad, software developer",
  );
}
