import About from "@/components/About";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Intro />
      <About />
    </main>
  );
}
