import Image from "next/image";
import TiketCard from "./components/ticket-card";

export default function Home() {
  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <TiketCard />
        <TiketCard />
        <TiketCard />
        <TiketCard />
      </div>
    </div>
  );
}
