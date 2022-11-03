import React from 'react';
import About from './About';
import Contact from './Contact';
import Experiences from './Experiences';
import { Header } from './Header';
import Profile from './Profile';
import Projects from './Projects';
import Skills from './Skills';

type Props = {};

export default function Home({ }: Props) {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">

            <section className='snap-center'>
                <Header />

            </section>

            <section id="profile" className='snap-start'>
                <Profile />
            </section>

            <section id="about" className='snap-center'>
                <About />
            </section>

            <section id="experience" className='snap-center'>
                <Experiences />
            </section>

            <section id="skills" className='snap-start'>
                <Skills />
            </section>

            <section id="projects" className='snap-start'>
                <Projects />
            </section>

            <section id="contact" className='snap-start'>
                <Contact />
            </section>

        </div>
    )
}
