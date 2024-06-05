import DrawerComponent from "@/components/Drawer/Drawer";
import AppBarComponent from "@/components/AppBar/AppBar";

export const metadata = {
  title: "Rappi",
  description: "Rappi 4 business",
};

export default function RootLayout({ children }) {
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
