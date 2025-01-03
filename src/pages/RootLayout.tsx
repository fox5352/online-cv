import { Outlet } from "react-router";
import Header from "../ui/Header";

// Global Constants
export const DT_DURATION = 1;
export const DT_DELAY = DT_DURATION / 1.6;

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
