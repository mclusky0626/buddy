import React from 'react';

// You would typically import images like this in a React project
// import person1Image from '../assets/images/person1.jpg';
// import teamImage from '../assets/images/team.jpg';
// import person2Image from '../assets/images/person2.jpg';
import person1Image from '../assets/bae.jpg'
import person2Image from '../assets/dldbsdn.jpg'
import teamImage from '../assets/LAena.png'



function Contributors() {
  // Example data for contributors
  const contributorsData = [
    {
      id: 1,
      name: '배건우', // Kim Min-jun
      role: '착취자', // Project Lead
      description: '이윤우와 인공지능을 착취해서 프로젝트를 완성했습니다.',
      // In a real project, you'd use imported image paths
      imageUrl: person1Image, // Placeholder image URL
      altText: '간으 사진',
    },
    {
      id: 2,
      name: '팀',
      role: '우리의 팀', // Development Team
      description: '구성원을 단결시켰다',
      imageUrl: teamImage, // Placeholder image URL
      altText: '팀 사진',
    },
    {
      id: 3,
      name: '이윤우', // Park Seo-yeon
      role: '노동자', // UI/UX Designer
      description: '개처럼 일했습니다',
      imageUrl: person2Image, // Placeholder image URL
      altText: '장애인 사진',
    },
  ];

  return (
    <section className="py-20" id="contributors">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-10">기여</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {contributorsData.map((contributor) => (
            <div key={contributor.id} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src={contributor.imageUrl}
                  alt={contributor.altText}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">{contributor.name}</h4>
              <p className="text-slate-600 mb-2">{contributor.role}</p>
              <p className="text-slate-700 text-sm">{contributor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contributors;