import { useState } from 'react';

function Scenarios() {
  const [tab, setTab] = useState<'incheon' | 'tashkent'>('incheon');
  return (
    <section className="py-20" id="scenarios"> {/* Resolved: Kept the 'id="scenarios"' as it was present in the first version and useful for direct linking within a single-page context. If routing is being fully implemented, this ID might be moved to a parent container if Scenarios becomes a full page. */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800">적용 시나리오</h3>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">저희 시스템이 한국 인천과 우즈베키스탄 타슈켄트에서 어떻게 활용될 수 있는지 구체적인 시나리오를 통해 확인해보세요.</p>
        </div>
        <div>
          <div className="flex justify-center border-b border-slate-200 mb-8">
            <button onClick={() => setTab('incheon')} className={`tab-btn px-6 py-3 text-lg font-medium ${tab === 'incheon' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-slate-500'}`}>인천 (한국)</button>
            <button onClick={() => setTab('tashkent')} className={`tab-btn px-6 py-3 text-lg font-medium ${tab === 'tashkent' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-slate-500'}`}>타슈켄트 (우즈베키스탄)</button>
          </div>
          {tab === 'incheon' && (
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-xl shadow-md" id="incheon">
              <div className="md:w-1/2">
                <h4 className="text-2xl font-bold text-slate-800 mb-4">해안 도시 인천의 재난 대비 최적화</h4>
                <p className="text-slate-600">항만과 고층 건물이 밀집된 인천은 해안 침수, 태풍 등 복합적인 재난에 취약합니다. 저희 시스템은 기존 인프라를 보완하여 도시의 대비 역량을 강화합니다.</p>
                <p className="mt-4 text-slate-600"><strong>시나리오 예시:</strong> AI가 조수 간만 및 기상 데이터를 분석하여 해안가 저지대 침수를 예측합니다. 즉시 텔레그램 봇으로 해당 지역 주민들에게 신속하게 대피 알림을 보내고, 실시간 교통 상황을 반영한 최적 대피 경로와 대피소 정보를 제공하여 인명 피해를 최소화합니다.</p>
              </div>
              <div className="md:w-1/2">
                <img src="https://placehold.co/600x400/0d9488/ffffff?text=Incheon+Scenario" alt="인천 시나리오 이미지" className="rounded-lg shadow-lg w-full h-auto" />
              </div>
            </div>
          )}
          {tab === 'tashkent' && (
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-xl shadow-md" id="tashkent">
              <div className="md:w-1/2">
                <h4 className="text-2xl font-bold text-slate-800 mb-4">지진 도시 타슈켄트의 안전 강화</h4>
                <p className="text-slate-600">1966년 대지진의 경험이 있는 타슈켄트는 지진 대비가 특히 중요합니다. 저희 시스템은 현지 상황에 맞춰 지진 발생 시 혼란을 최소화하는 데 기여할 수 있습니다.</p>
                <p className="mt-4 text-slate-600"><strong>시나리오 예시:</strong> 만약 1966년과 같은 대지진이 발생한다면, 시스템이 즉시 지진을 감지하고 봇을 통해 우즈벡어로 대피 알림을 전송합니다. 지도를 통해 가장 가까운 안전한 대피소로 안내하고, 현지화된 안전 수칙을 제공하여 혼란과 사상자를 크게 줄일 수 있습니다. 이는 1966년의 상황을 시뮬레이션하여 대피 효율성을 분석하는 데에도 활용될 수 있습니다.</p>
              </div>
              <div className="md:w-1/2">
                <img src="https://placehold.co/600x400/334155/ffffff?text=Tashkent+Scenario" alt="타슈켄트 시나리오 이미지" className="rounded-lg shadow-lg w-full h-auto" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Scenarios;