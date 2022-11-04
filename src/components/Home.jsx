import React, { useEffect, useState } from 'react';
import About from './About';
import Contact from './Contact';
import Experiences from './Experiences';
import Profile from './Profile';
import Projects from './Projects';
import Skills from './Skills';
import Header from "./Header";
import { getExperiences, getPageInfo, getProjects, getSkills } from '../utils/api';


export default function Home() {

    const [pageInfo, setPageInfo] = useState();
    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([])
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const pageInfos = async () => {
            const data = await getPageInfo()
            setPageInfo(data[0])
        }
        pageInfos().catch(r => console.log(r.message))
    }, [])

    useEffect(() => {
        const exp = async () => {
            const data = await getExperiences()
            setExperiences(data)
        }
        exp().catch(r => console.log(r.message))
    }, [])

    useEffect(() => {
        const skills = async () => {
            const data = await getSkills()
            setSkills(data)
        }
        skills().catch(r => console.log(r.message))
    }, [])

    useEffect(() => {
        const Project = async () => {
            const data = await getProjects()
            setProjects(data)
        }
        Project().catch(r => console.log(r.message))
    }, [])


    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">

            <section className='snap-center'>
                <Header pageInfo={pageInfo} />

            </section>

            <section id="profile" className='snap-start'>
                <Profile pageInfo={pageInfo} />
            </section>

            <section id="about" className='snap-center'>
                <About pageInfo={pageInfo} />
            </section>

            <section id="experience" className='snap-center'>
                <Experiences experiences={experiences} />
            </section>

            <section id="skills" className='snap-start'>
                <Skills skills={skills} />
            </section>

            <section id="projects" className='snap-start'>
                <Projects projects={projects} />
            </section>

            <section id="contact" className='snap-start'>
                <Contact pageInfo={pageInfo} />
            </section>

        </div>
    )
}

