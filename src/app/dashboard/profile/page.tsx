import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ProfileImageUpload from "@/src/components/ProfileImageUpload";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/signin");
  }

  const user = session?.user;

  return (
    <div className="pt-10 pl-10 pr-8 pb-10 bg-[#f7f7f7] dark:bg-[#171717] h-screen">
      <div className="flex px-4 py-5 sm:px-6">
        <div className="relative">
          {/* Pass the current user image URL to the client component */}
          <ProfileImageUpload imageUrl={user?.image || ""} />
        </div>
        <div className="">
          <h3 className="text-lg leading-6 font-medium dark:text-[#6699cc] text-gray-600">
            {user?.name}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-[#888888]">
            Details and informations about user.
          </p>
        </div>
      </div>
      <div className="border-t dark:border-[#343434] dark:bg-[#1c1c1c] border-gray-200">
        <dl>
          <div className="bg-white dark:bg-[#171717] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-[#6699cc]">Full name</dt>
            <dd className="mt-1 text-sm text-[#888888] sm:mt-0 sm:col-span-2">
              {user?.name}
            </dd>
          </div>
          <div className="bg-gray-50 dark:bg-[#1c1c1c] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-[#6699cc]">
              Email address
            </dt>
            <dd className="mt-1 text-sm text-[#888888] sm:mt-0 sm:col-span-2">
              {user?.email}
            </dd>
          </div>
          <div className="bg-white dark:bg-[#171717] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-[#6699cc]">Login Id</dt>
            <dd className="mt-1 text-sm text-[#888888] sm:mt-0 sm:col-span-2">
              {user?.id}
            </dd>
          </div>
          <div className="bg-gray-50 dark:bg-[#1c1c1c] border-b dark:border-[#343434] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-[#6699cc]">About</dt>
            <dd className="mt-1 text-sm text-[#888888] sm:mt-0 sm:col-span-2">
              To get social media testimonials like these, keep your customers
              engaged with your social media accounts by posting regularly
              yourself
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
