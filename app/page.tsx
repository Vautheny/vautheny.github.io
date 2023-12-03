import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-10 pb-24 px-24">
      <h1>Developer Portfolio</h1>
      <AboutMe />
      {/* <Skills /> */}
      <Projects />
    </main>
  )
}
