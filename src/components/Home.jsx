import React, { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Profile from "./Profile";
import Projects from "./Projects";
import Skills from "./Skills";
import Header from "./Header";
import {
  getExperiences,
  getPageInfo,
  getProjects,
  getSkills,
} from "../utils/api";

export default function Home({ theme, toggleTheme }) {
  const [pageInfo, setPageInfo] = useState();
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const pageInfos = async () => {
      const data = await getPageInfo();
      setPageInfo(data[0]);
    };
    pageInfos().catch((r) => console.log(r.message));
  }, []);

  useEffect(() => {
    const exp = async () => {
      const data = await getExperiences();
      setExperiences(data);
    };
    exp().catch((r) => console.log(r.message));
  }, []);

  useEffect(() => {
    const skills = async () => {
      const data = await getSkills();
      setSkills(data);
    };
    skills().catch((r) => console.log(r.message));
  }, []);

  useEffect(() => {
    const Project = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    Project().catch((r) => console.log(r.message));
  }, []);

  return (
    <div className={theme === "dark-mode" ? "dark-home" : "light-home"}>
      <section className="snap-center">
        <Header pageInfo={pageInfo} theme={theme} toggleTheme={toggleTheme} />
      </section>

      <section id="profile" className="snap-start">
        <Profile pageInfo={pageInfo} theme={theme} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} theme={theme} />
      </section>

      <section id="experience" className="snap-center">
        <Experiences experiences={experiences} theme={theme} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} theme={theme} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} theme={theme} />
      </section>

      <section id="contact" className="snap-start">
        <Contact pageInfo={pageInfo} theme={theme} />
      </section>
    </div>
  );
}
