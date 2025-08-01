import React from 'react';

// You would typically import images like this in a React project
// import person1Image from '../assets/images/person1.jpg';
// import teamImage from '../assets/images/team.jpg';
// import person2Image from '../assets/images/person2.jpg';

function Contributors() {
  // Example data for contributors
  const contributorsData = [
    {
      id: 1,
      name: '김민준', // Kim Min-jun
      role: '프로젝트 리드', // Project Lead
      description: '이 프로젝트의 전반적인 기획과 개발을 이끌었습니다. 사용자 경험 향상에 중점을 두었습니다.',
      // In a real project, you'd use imported image paths
      imageUrl: 'https://via.placeholder.com/150/AEC6CF/FFFFFF?text=Person1', // Placeholder image URL
      altText: '김민준 사진',
    },
    {
      id: 2,
      name: '팀',
      role: '개발팀', // Development Team
      description: '프론트엔드와 백엔드 개발을 담당하며, 기술적인 구현과 안정화에 기여했습니다.',
      imageUrl: 'https://via.placeholder.com/150/84B08C/FFFFFF?text=Team', // Placeholder image URL
      altText: '팀 사진',
    },
    {
      id: 3,
      name: '박서연', // Park Seo-yeon
      role: 'UI/UX 디자이너', // UI/UX Designer
      description: '매력적인 사용자 인터페이스와 직관적인 사용자 경험을 디자인하는 데 핵심적인 역할을 했습니다.',
      imageUrl: 'https://via.placeholder.com/150/FFDDC1/FFFFFF?text=Person2', // Placeholder image URL
      altText: '박서연 사진',
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