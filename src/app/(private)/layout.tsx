import DrawerComponent from "@/components/Drawer/Drawer";
import AppBarComponent from "@/components/AppBar/AppBar";

export const metadata = {
  title: "Rappi",
  description: "Rappi 4 business",
};

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <div>
      <AppBarComponent />
      <div className="layout">
        <DrawerComponent />
        {children}
      </div>
    </div>
  );
}
