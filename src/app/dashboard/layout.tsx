import DashboardHeader from "@/src/components/DashboardHeader";
import Sidebar from "@/src/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full flex-1">
        <DashboardHeader />
        <div className="overflow-hidden">{children}</div>
      </main>
    </div>
  );
}
