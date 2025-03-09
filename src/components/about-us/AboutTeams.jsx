import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import TeamsCard from './TeamsCard';
import CEOSection from './CEOSection';
import CEOImage from '../../assets/images/Teams/Prasanta_day_CEO.png';
import Walid from '../../assets/images/Teams/Walid_ahmend_nexgenix.png';
import Sohel from '../../assets/images/Teams/Mohammed_shohel_nexgenix.png';
import Supta from '../../assets/images/Teams/Supta_nexgenix.png';
import Pinki from '../../assets/images/Teams/Pinki_nexgenix.png';
import Tonmoy from '../../assets/images/Teams/Tonmoy_mitra_nexgenix.png';
import Sanchari from '../../assets/images/Teams/Shakti_Karmakar_nexGenix.png';
import Tibra from '../../assets/images/Teams/Tibra_paul_nexgenix.png';
import asad from '../../assets/images/Teams/Asaduzzaman_nexgenix.png';
import Riaz from '../../assets/images/Teams/Riaz_uddin_ngenix.png';
import Afsana from '../../assets/images/Teams/Afsana_Tasnim_Labonno.png';
import Anyat from '../../assets/images/Teams/Anayet_hossen_Masud_nexgenix.png';
import Jamshadul from '../../assets/images/Teams/Mohammad_Jamshadul_Islam_Minhaj_nexgenix.png';
import urmi from '../../assets/images/Teams/Urmi_Karmakar_nexgenix.png';

const AboutTeams = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // Team members data with added department field for categorization
  const teamMembers = [
    {
      id: 1,
      name: 'Prashanta Dey',
      email: 'prashantadey.pda@gmail.com',
      image: CEOImage,
      bio: "I'm Prashanta Dey, the CEO of The NexGenix Ltd., where we specialize in Social Media Marketing and SEO. My journey in the digital space started with a simple goal—helping businesses grow online through smart strategies and data-driven marketing. At NexGenix, we focus on building strong brand presence, increasing visibility, and driving real results for our clients. I believe in creativity backed by strategy, ensuring every campaign we run and every SEO effort we make adds real value. For me, it's not just about marketing—it's about helping brands connect, engage, and grow in the digital world.",
      position: 'CEO',
      company: 'The NexGenix Ltd.',
      department: 'Leadership'
    },
    {
      id: 2,
      name: 'Walid Ahmed',
      image: Walid,
      position: 'Operational and Innovation Strategy (Intern)',
      department: 'Strategy & Innovation',
      company: 'NexGenix',
      bio: "Walid is an innovative thinker and strategist at NexGenix, focusing on operational efficiency and business growth. His expertise in market research and process optimization helps drive new ideas and innovation for our company's success.",
      category: 'Team Leader'
    },
    {
      id: 3,
      name: 'Mohammed Sohel',
      image: Sohel,
      position: 'Front-end Developer and Quality Assurance (Intern)',
      department: 'Development & QA',
      company: 'NexGenix',
      bio: 'Sohel is a skilled front-end developer and quality assurance expert at NexGenix. With a passion for creating seamless user experiences, he ensures our websites and applications are both visually appealing and highly functional.',
      category: 'Team Leader'
    },
    {
      id: 4,
      name: 'Supta',
      image: Supta,
      position: 'UI/UX Designer',
      department: 'Design',
      company: 'NexGenix',
      bio: 'Supta is a creative UI/UX designer dedicated to crafting user-centric designs at NexGenix. She specializes in wireframing, prototyping, and enhancing user experiences to make digital interactions intuitive and engaging.',
      category: 'Team Leader'
    },
    {
      id: 5,
      name: 'Pinki',
      image: Pinki,
      position: 'UI/UX Designer (Intern)',
      department: 'Design',
      company: 'NexGenix',
      bio: 'Pinki is a UI/UX design intern passionate about creating visually compelling and user-friendly designs. She works closely with the design team to optimize digital interfaces and improve user engagement.',
      category: 'Team Member'
    },
    {
      id: 6,
      name: 'Riaz Uddin',
      image: Riaz,
      position: 'Junior Marketing Executive',
      department: 'Marketing & Strategy',
      company: 'NexGenix',
      bio: 'Riaz Uddin is a results-driven marketing executive focused on brand growth, campaign strategy, and audience engagement at NexGenix.',
      category: 'Team Member'
    },
    {
      id: 7,
      name: 'Tibra Paul',
      image: Tibra,
      position: 'Back-end Developer (Intern)',
      department: 'Development',
      company: 'NexGenix',
      bio: 'Tibra is a back-end development intern at NexGenix, specializing in server-side logic, databases, and API development. He plays a key role in building scalable and efficient back-end solutions for our digital products.',
      category: 'Team Member'
    },
    {
      id: 8,
      name: 'Tonmoy Mitra',
      image: Tonmoy,
      position: 'Graphic Designer (Intern)',
      department: 'Design',
      company: 'NexGenix',
      bio: 'Tonmoy is a creative graphic design intern at NexGenix, specializing in branding, visual storytelling, and digital graphics. His innovative designs help strengthen our brand identity and marketing campaigns.',
      category: 'Team Member'
    },
    {
      id: 9,
      name: 'Sanchari Sakti',
      image: Sanchari,
      position: 'Copywriting & Client Strategy Execution (Intern)',
      department: 'Marketing & Strategy',
      company: 'NexGenix',
      bio: 'Sanchari is a talented copywriter and strategist at NexGenix, crafting compelling content that enhances brand messaging. Her expertise in content strategy and storytelling ensures effective engagement with target audiences.',
      category: 'Team Member'
    },
    {
      id: 10,
      name: 'Urmi Karmaker',
      image: urmi,
      position: 'AI Research & Backend Development',
      department: 'Operations',
      company: 'NexGenix',
      bio: 'Urmi Karmaker is an AI researcher and backend developer at NexGenix. She specializes in developing intelligent systems and optimizing backend architectures to enhance performance and scalability. With a deep understanding of AI technologies, she focuses on building innovative solutions that drive efficiency and automation in business operations.',
      category: 'Team Leader'
    },
    {
      id: 11,
      name: 'Afsana Tasnim Laboni',
      image: Afsana,
      position: 'UI/UX Designer',
      department: 'Project Management',
      company: 'NexGenix',
      bio: 'Afsana Tasnim Laboni is a creative UI/UX Designer at NexGenix, specializing in crafting user-friendly and visually appealing interfaces. She focuses on enhancing user experiences through research, wireframing, and prototyping, ensuring that digital products meet both user needs and business goals.',
      category: 'Team Leader'
    },
    {
      id: 12,
      name: 'Anayet Hossen Masud',
      image: Anyat,
      position: 'Graphics Designer',
      department: 'Marketing',
      company: 'NexGenix',
      bio: 'Anayet Hossen Masud is a skilled Graphics Designer at NexGenix, specializing in creating visually engaging marketing materials that enhance brand presence. With expertise in digital design, branding, and visual storytelling, he collaborates with the marketing team to craft compelling graphics for campaigns, advertisements, and promotions.',
      category: 'Team Leader'
    },
    {
      id: 13,
      name: 'Mohammed Jamshadul Islam',
      image: Jamshadul,
      position: 'Graphics Designer',
      department: 'Design',
      company: 'NexGenix',
      bio: 'Mohammed Jamshadul Islam is a talented Graphics Designer at NexGenix, specializing in creating visually compelling designs that enhance brand identity. With expertise in digital illustration, typography, and branding, he ensures that all visual content aligns with the company’s vision and engages the target audience effectively.',
      category: 'Team Leader'
    },
    {
      id: 15,
      name: 'Asaduzzaman',
      image: asad,
      position: 'Full Stack Developer (Intern)',
      department: 'Development',
      company: 'NexGenix',
      bio: 'Asaduzzaman is a full-stack developer intern at NexGenix with expertise in front-end and back-end technologies. He is passionate about building dynamic web applications, ensuring seamless performance and user experience.',
      category: 'Team Leader'
    }
  ];

  // Get CEO data
  const ceoData = teamMembers.find((member) => member.position === 'CEO');

  const teamLeader = teamMembers.filter(
    (member) => member.category === 'Team Leader'
  );
  // Get remaining team members (excluding CEO)
  const regularTeamMembers = teamMembers.filter(
    (member) => member.category === 'Team Member'
  );

  // Handle card click
  const handleCardClick = (id) => {
    setSelectedMember(selectedMember === id ? null : id);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };
  const selectedMemberData = teamMembers.find((m) => m.id === selectedMember);

  return (
    <section className="w-full mt-10 md:mt-0 relative py-10">
      <div
        className="absolute w-[300%] z-0 -rotate-3 inset-0 rounded-4xl"
        style={{
          background: 'linear-gradient(155deg, #360955 18.41%, #5F1D91 139.88%)'
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

      {/* Employee Card Section -  members one by one */}
      <div className="px-10 mt-16">
        <h2 className="text-2xl font-bold text-white mb-8 relative z-10 border-l-4 border-white pl-4">
          Team Leaders
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:flex-row gap-10 flex-wrap justify-start items-center">
          {teamLeader.map((member) => (
            <TeamsCard
              key={member.id}
              name={member.name}
              // email={member.email}
              image={member.image}
              position={member.position}
              company={member.company}
              isSelected={selectedMember === member.id}
              onClick={() => handleCardClick(member.id)}
            />
          ))}
        </ul>
      </div>

      {/* Employee Card Section -  members one by one */}
      <div className="px-10 mt-16">
        <h2 className="text-2xl font-bold text-white mb-8 relative z-10 border-l-4 border-white pl-4">
          Team Members
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:flex-row gap-10 flex-wrap justify-start items-center">
          {regularTeamMembers.map((member) => (
            <TeamsCard
              key={member.id}
              name={member.name}
              // email={member.email}
              image={member.image}
              position={member.position}
              company={member.company}
              isSelected={selectedMember === member.id}
              onClick={() => handleCardClick(member.id)}
            />
          ))}
        </ul>
      </div>

      {/* Selected Member Bio - Only shown when a member is selected */}
      <AnimatePresence>
        {selectedMember && selectedMemberData && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-2xl w-full"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0 mr-4">
                  <img
                    src={selectedMemberData.image}
                    alt={selectedMemberData.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#5F1D91] mb-1">
                    {selectedMemberData.name}
                  </h3>
                  <h4 className="text-lg font-medium text-gray-700 mb-1">
                    {selectedMemberData.position}
                  </h4>
                  <p className="text-gray-500">{selectedMemberData.company}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h5 className="text-lg font-semibold text-gray-800 mb-2">
                  About
                </h5>
                <p className="text-gray-700 leading-relaxed">
                  {selectedMemberData.bio}
                </p>
              </div>

              <div className="mt-6 text-right">
                <button
                  className="px-4 py-2 bg-[#5F1D91] text-white rounded-lg hover:bg-[#330B51] transition-colors"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutTeams;
