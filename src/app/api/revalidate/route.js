import { revalidatePath } from "next/cache";

export async function POST(request) {
  const path = request.nextUrl.searchParams.get("path");

  if (!path) {
    return Response.json({ message: "Missing path param" }, { status: 400 });
  }

  revalidatePath(path);

  return Response.json({ revalidated: true, now: Date.now() });
}
