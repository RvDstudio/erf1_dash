import Header from "@/src/components/DashboardHeader";
import Sidebar from "@/src/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 ">
        <Header />
        {children}
      </div>
    </div>
  );
}
