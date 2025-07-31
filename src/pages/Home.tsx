import { Link } from 'react-router-dom';
import System from './System';
import Bot from './Bot';
import Scenarios from './Scenarios';
import Vision from './Vision';

function Home() {
  return (
    <>
      <section className="py-20 md:py-32 bg-white text-center" id="introduction">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">AI와 건축의 융합, 도시의 미래를 지키다</h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            기후 변화와 도시화로 인해 예측 불가능한 재난이 증가하는 시대, 저희는 AI와 건축 기술을 융합하여 도시의 <strong>회복탄력성(Resilience)</strong>을 극대화하는 혁신적인 재난 대응 시스템을 제안합니다. 이는 단순한 사후 복구를 넘어, 사전 예측과 실시간 대응으로 시민의 생명과 재산을 보호하는 새로운 패러다임입니다.
          </p>
          <Link to="/system" className="bg-teal-600 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-700 transition-colors">시스템 알아보기</Link>
        </div>
      </section>
      <System />
      <Bot />
      <Scenarios />
      <Vision />
    </>
  );
}

export default Home;