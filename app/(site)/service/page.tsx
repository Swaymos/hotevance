import { Metadata } from "next";
import Services from "@/components/Services";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Hotevance Smart Homes",

  // other metadata
  description: "Smart Homes Rule",
};

export default function OurServices() {
  return (
    <main>
      <PageHeader PageTitle="Hotevance Expertise" />

      <Services />
    </main>
  );
}
