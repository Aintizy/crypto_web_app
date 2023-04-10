import { PropsWithChildren } from "react";
import Navbar from "../components/Navbar";

export default function MainLayout(props: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}
