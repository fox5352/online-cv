import { Outlet } from "react-router";

import Header from "../ui/Header";
import { DialogProvider } from "../store/Dialog/DialogContext";
import RepoDialog from "../ui/RepoDialog";
import Footer from "../ui/Footer";

// Global Constants
export const DT_DURATION = 1;
export const DT_DELAY = DT_DURATION / 1.6;

export default function RootLayout() {
  return (
    <DialogProvider>
      <Header />
      <Outlet />
      <RepoDialog />
      <Footer />
    </DialogProvider>
  );
}
