import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <AboutMe />
      <Projects />
    </main>
  )
}
