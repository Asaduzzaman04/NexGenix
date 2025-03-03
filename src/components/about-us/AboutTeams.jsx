import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TeamsCard from './TeamsCard';
import CEOSection from './CEOSection';
import CEOImage from '../../assets/images/Prasanta_day_CEO.jpg';

const AboutTeams = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // Team members data with added department field for categorization
  const teamMembers = [
    {
      id: 7,
      name: 'Prashanta Dey',
      email: 'prashanta@nexgenix.com',
      image: CEOImage,
      bio: "I'm Prashanta Dey, the CEO of The NexGenix Ltd., where we specialize in Social Media Marketing and SEO. My journey in the digital space started with a simple goal—helping businesses grow online through smart strategies and data-driven marketing. At NexGenix, we focus on building strong brand presence, increasing visibility, and driving real results for our clients. I believe in creativity backed by strategy, ensuring every campaign we run and every SEO effort we make adds real value. For me, it's not just about marketing—it's about helping brands connect, engage, and grow in the digital world.",
      position: 'CEO',
      company: 'The NexGenix Ltd.',
      department: 'Leadership'
    },
    {
      id: 1,
      name: 'Marvin McKinney',
      email: 'marvin@example.com',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      bio: 'Marvin is a marketing specialist with over 8 years of experience in digital marketing. He specializes in creating comprehensive marketing strategies that drive engagement and conversion. His analytical approach to marketing has helped numerous clients achieve their business goals.',
      position: 'Marketing Specialist',
      company: 'Example Corp',
      department: 'Marketing'
    },
    {
      id: 2,
      name: 'Kathryn Murphy',
      email: 'kathryn@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      bio: 'Kathryn is an SEO expert who has helped businesses improve their search rankings and online visibility. With a background in data analysis, she excels at identifying optimization opportunities and implementing effective SEO strategies.',
      position: 'SEO Analyst',
      company: 'Example Corp',
      department: 'SEO'
    },
    {
      id: 3,
      name: 'Jacob Jones',
      email: 'jacob@example.com',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      bio: 'Jacob oversees all content creation and strategy. His creative approach to storytelling has helped brands connect with their audiences in meaningful ways. He believes that quality content is the foundation of any successful digital marketing strategy.',
      position: 'Content Manager',
      company: 'Example Corp',
      department: 'Content'
    },
    {
      id: 4,
      name: 'Leslie Alexander',
      email: 'leslie@example.com',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
      bio: 'Leslie is a social media strategist with a passion for building online communities. She has a keen understanding of platform-specific strategies and knows how to create engaging content that resonates with different audiences.',
      position: 'Social Media Strategist',
      company: 'Example Corp',
      department: 'Social Media'
    },
    {
      id: 5,
      name: 'Robert Smith',
      email: 'robert@example.com',
      image:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      bio: 'Robert leads our marketing department with over 15 years of experience in the industry. His strategic vision and leadership have been instrumental in growing our marketing capabilities and delivering exceptional results for our clients.',
      position: 'Marketing Director',
      company: 'Example Corp',
      department: 'Marketing'
    },
    {
      id: 6,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
      bio: 'Sarah is a talented content writer with a background in journalism. Her ability to craft compelling narratives has helped our clients tell their brand stories in ways that engage and inspire their target audiences.',
      position: 'Content Writer',
      company: 'Example Corp',
      department: 'Content'
    }
  ];

  // Get CEO data
  const ceoData = teamMembers.find((member) => member.position === 'CEO');

  // Get remaining team members (excluding CEO)
  const regularTeamMembers = teamMembers.filter(
    (member) => member.position !== 'CEO'
  );

  // Get unique departments for categorization (excluding Leadership)
  const departments = [
    ...new Set(regularTeamMembers.map((member) => member.department))
  ];

  // Handle card click
  const handleCardClick = (id) => {
    setSelectedMember(selectedMember === id ? null : id);
  };

  return (
    <section className="w-full mt-10 md:mt-0 relative py-10">
      <div
        className="absolute w-[300%] z-0 -rotate-3 inset-0 rounded-4xl"
        style={{
          background: 'linear-gradient(155deg, #330B51 18.41%, #5F1D91 139.88%)'
        }}
      />

      {/* Intro Text */}
      <motion.div
        className="relative w-full h-[300px] rounded-lg  overflow-hidden"
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

      {/* CEO Section */}
      {ceoData && <CEOSection ceo={ceoData} />}

      {/* Employee Card Section - Grouped by Department */}
      <div className="px-10 mt-16">
        {departments.map((department) => (
          <div key={department} className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 relative z-10 border-l-4 border-white pl-4">
              {department} Team
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-3  md:flex-row gap-10 flex-wrap justify-start items-center">
              {regularTeamMembers
                .filter((member) => member.department === department)
                .map((member) => (
                  <TeamsCard
                    key={member.id}
                    name={member.name}
                    email={member.email}
                    image={member.image}
                    position={member.position}
                    company={member.company}
                    isSelected={selectedMember === member.id}
                    onClick={() => handleCardClick(member.id)}
                  />
                ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Selected Member Bio - Only shown when a member is selected */}
      {selectedMember && (
        <motion.div
          className="relative z-20 mx-10 mt-10 bg-white/90 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-[#5F1D91] mb-2">
            {teamMembers.find((m) => m.id === selectedMember)?.name}
          </h3>
          <h4 className="text-lg font-medium text-gray-700 mb-4">
            {teamMembers.find((m) => m.id === selectedMember)?.position} at{' '}
            {teamMembers.find((m) => m.id === selectedMember)?.company}
          </h4>
          <p className="text-gray-800 leading-relaxed">
            {teamMembers.find((m) => m.id === selectedMember)?.bio ||
              'This team member is passionate about delivering exceptional results and has extensive experience in their field. They bring creativity, expertise, and dedication to every project they work on.'}
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default AboutTeams;
