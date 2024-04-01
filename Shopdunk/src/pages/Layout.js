import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Container from "../view/Container/Container";
import Footer from "./Footer/Footer";
export default function Layout() {
  return (
    <>
      <Header />
      <Container />
      <Footer />
      <Outlet />
    </>
  );
}
