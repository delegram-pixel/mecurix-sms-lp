import Link from "next/link";
import SigninForm from "@/components/features/auth/SigninForm";
import AuthPromoAside from "@/components/features/auth/AuthPromoAside";
import PenwwwsIcon from "@/components/icons/Penwwws";

export default async function SigninPage({
  searchParams,
}: {
  searchParams: Promise<{ invite_token: string }>;
}) {
  const inviteToken = (await searchParams).invite_token;

  return (
    <div className="flex overflow-hidden">
      <aside className="flex min-h-screen w-full flex-col items-center justify-between p-4 md:h-screen md:w-2/3 lg:w-1/2">
        <Link
          href="/"
          className="text-primary mb-auto flex w-fit items-center gap-1 self-start text-lg font-semibold md:hidden"
        >
          <PenwwwsIcon className="h-5 w-5" />
          <span>Mecurixtech</span>
        </Link>

        <div className="flex h-full w-full flex-col items-start justify-center gap-6 md:w-[30rem]">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold text-black">Sign in</h1>
            <span className="text-muted-foreground self-start">
              Don't have an account?
              <Link
                href="/sign-up"
                className="px-1 font-semibold text-black underline"
              >
                Sign up
              </Link>
            </span>
          </div>
          <SigninForm
            redirectUrl={inviteToken ? `/invite/${inviteToken}` : "/console"}
          />

          {/* <div className="flex w-full items-center">
            <span className="bg-border h-0.5 flex-grow"></span>
            <span className="text-muted-foreground m-1 text-xs font-semibold uppercase">
              or continue with
            </span>
            <span className="bg-border h-0.5 flex-grow"></span>
          </div> */}

          {/* <GoogleOAuthBtn
            redirectUrl={inviteToken ? `/invite/${inviteToken}` : ""}
          /> */}
        </div>
      </aside>
      <AuthPromoAside />
    </div>
  );
}
