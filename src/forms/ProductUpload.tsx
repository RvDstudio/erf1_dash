import { auth } from "@/auth";
import { redirect } from "next/navigation";
import WidgetToolbar from "../components/WidgetToolbar";
import Image from "next/image";

export default async function Page() {
  const session = await auth();

  // Check if session exists and the user is authenticated
  if (!session || !session.user) {
    return <div>Not authenticated</div>;
  }

  // Check if the user is an admin
  if (!session.user.isAdmin) {
    // Redirect non-admin users to an unauthorized page
    redirect("/login");
    return null; // Ensure no rendering occurs after redirection
  }

  // If authenticated and isAdmin, render the page content
  return (
    <div className="w-full flex flex-col">
      <WidgetToolbar />

      <div className="w-full flex flex-col">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-14 w-14">
                        <Image
                          className="h-14 w-14 rounded"
                          src="/images/product1.jpg"
                          alt=""
                          width={10}
                          height={10}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm leading-5 font-medium text-gray-900">
                          Bernard Lane
                        </div>
                        <div className="text-sm leading-5 text-gray-500">
                          bernardlane@example.com
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">
                      Director
                    </div>
                    <div className="text-sm leading-5 text-gray-500">
                      Human Resources
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                    Owner
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-14 w-14">
                        <Image
                          className="h-14 w-14 rounded"
                          src="/images/product2.jpg"
                          alt=""
                          width={10}
                          height={10}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm leading-5 font-medium text-gray-900">
                          Bernard Lane
                        </div>
                        <div className="text-sm leading-5 text-gray-500">
                          bernardlane@example.com
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">
                      Director
                    </div>
                    <div className="text-sm leading-5 text-gray-500">
                      Human Resources
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                    Owner
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-14 w-14">
                        <Image
                          className="h-14 w-14 rounded"
                          src="/images/product1.jpg"
                          alt=""
                          width={10}
                          height={10}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm leading-5 font-medium text-gray-900">
                          Bernard Lane
                        </div>
                        <div className="text-sm leading-5 text-gray-500">
                          bernardlane@example.com
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">
                      Director
                    </div>
                    <div className="text-sm leading-5 text-gray-500">
                      Human Resources
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Inactive
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                    Owner
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-14 w-14">
                        <Image
                          className="h-14 w-14 rounded"
                          src="/images/product2.jpg"
                          alt=""
                          width={10}
                          height={10}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm leading-5 font-medium text-gray-900">
                          Bernard Lane
                        </div>
                        <div className="text-sm leading-5 text-gray-500">
                          bernardlane@example.com
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="text-sm leading-5 text-gray-900">
                      Director
                    </div>
                    <div className="text-sm leading-5 text-gray-500">
                      Human Resources
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Inactive
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                    Owner
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
