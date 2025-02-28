import React from 'react';
import { motion } from  'motion/react'
import TeamsCard from './TeamsCard';

const AboutTeams = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Marvin McKinney',
      email: 'marvin@example.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    },
    {
      id: 2,
      name: 'Kathryn Murphy',
      email: 'kathryn@example.com',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    },
    {
      id: 3,
      name: 'Jacob Jones',
      email: 'jacob@example.com',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    },
    {
      id: 4,
      name: 'Leslie Alexander',
      email: 'leslie@example.com',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80'
    },
    {
      id: 5,
      name: 'Jacob Jones',
      email: 'jacob@example.com',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    },
    {
      id: 6,
      name: 'Jacob Jones',
      email: 'jacob@example.com',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    },
  ];

  return (
    <section className="w-full mt-10 md:mt-0 relative py-10 ">
      <div
        className="absolute w-[300%] z-0 -rotate-3 inset-0 rounded-4xl"
        style={{
          background: 'linear-gradient(155deg, #330B51 18.41%, #5F1D91 139.88%)'
        }}
      />
      
      {/* Intro Text */}
      <motion.div
        className="relative w-full h-[300px] rounded-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-4 text-start md:text-center">
            Our Team
          </h1>
          <p className="text-lg text-center md:text-justify max-w-md">
            Our dynamic team ensures our clients have their fingers on the pulse
          </p>
        </div>
      </motion.div>

      {/* Employee Card Section */}
      <ul className="flex flex-col md:flex-row gap-10 flex-wrap justify-center items-center px-10 mt-10">
        {teamMembers.map((member) => (
          <TeamsCard 
            key={member.id} 
            name={member.name} 
            email={member.email} 
            image={member.image} 
            isSelected={false} // Default to false; you can manage this state externally
            onClick={() => {}} // Default empty function; you can pass a real handler
          />
        ))}
      </ul>
    </section>
  );
};

export default AboutTeams;