import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  //publicRoutes: ["/api/webhook"],
});

export const config = {
  // ระบุเงื่อนไขการเรียกใช้ clerkMiddleware
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
