import GenericLayout from "@/layouts/GenericLayout";
import { useEffect } from "react";
import AOS from "aos";

export default function MainPage() {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
    });
  }, []);

  return (
    <GenericLayout>
      <p>assdasda</p>
    </GenericLayout>
  );
}
