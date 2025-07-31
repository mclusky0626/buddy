import { useState } from 'react';

const details = {
  info1: (
    <>
      <h5 className="font-bold text-lg text-teal-700 mb-2">상세 정보: 데이터 수집 및 감지</h5>
      <p>저희는 USGS 지진 API와 GDACS API를 통해 실시간 글로벌 재난 데이터를 확보합니다. 향후에는 건물 내부에 설치될 화재, 가스, 온도, 습도 등 다양한 IoT 센서 데이터를 통합하여 실시간 환경 변화를 더욱 정밀하게 감지할 계획입니다. 이를 통해 재난의 징후를 조기에 포착하고 대응 시간을 확보합니다.</p>
    </>
  ),
  info2: (
    <>
      <h5 className="font-bold text-lg text-teal-700 mb-2">상세 정보: AI 기반 분석 및 예측</h5>
      <p>수집된 방대한 데이터를 기반으로 AI 모듈은 재난 발생 가능성을 판단하고, 잠재적 피해 범위를 분석하며, 최적의 대피 경로를 계산하는 등 고도화된 지능형 판단을 내립니다. 특히, GDACS의 심각도와 geopy 라이브러리를 활용한 거리 계산을 통해 사용자 위치에 맞는 맞춤형 경보를 생성하여 정보의 정확성과 유효성을 높입니다.</p>
    </>
  ),
  info3: (
    <>
      <h5 className="font-bold text-lg text-teal-700 mb-2">상세 정보: 지능형 대응 및 제어</h5>
      <p>AI의 분석 결과는 즉각적인 행동으로 이어집니다. 건축 시스템이 자동으로 방화 셔터를 내리거나 비상등을 점등하는 등 물리적 대응을 수행합니다. 동시에, 텔레그램 봇을 통해 시민들에게 실시간으로 위험 정보를 전달하고, 대피 경로를 안내합니다.</p>
    </>
  ),
};

function System() {
  const [current, setCurrent] = useState<string | null>(null);
  return (
    <section className="py-20" id="system">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800">시스템 핵심 개념</h3>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">저희 시스템은 데이터 수집, AI 분석, 지능형 대응의 세 단계로 구성되어 실시간으로 재난에 반응합니다. 각 단계를 클릭하여 자세한 설명을 확인해보세요.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          <div className="w-full md:w-1/3 text-center">
            <button onClick={() => setCurrent(current === 'info1' ? null : 'info1')} className="interactive-card w-full p-6 bg-white rounded-xl shadow-lg border-2 border-transparent hover:border-teal-500 transition-all">
              <div className="text-4xl mb-4">📡</div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">1. 데이터 수집 및 감지</h4>
              <p className="text-slate-600">실시간 재난 데이터와 건물 내 IoT 센서 정보를 통합하여 모든 변화를 정밀하게 감지합니다.</p>
            </button>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <button onClick={() => setCurrent(current === 'info2' ? null : 'info2')} className="interactive-card w-full p-6 bg-white rounded-xl shadow-lg border-2 border-transparent hover:border-teal-500 transition-all">
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">2. AI 기반 분석 및 예측</h4>
              <p className="text-slate-600">수집된 데이터를 AI가 분석하여 재난 발생 가능성, 피해 범위, 최적 대피 경로를 예측합니다.</p>
            </button>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <button onClick={() => setCurrent(current === 'info3' ? null : 'info3')} className="interactive-card w-full p-6 bg-white rounded-xl shadow-lg border-2 border-transparent hover:border-teal-500 transition-all">
              <div className="text-4xl mb-4">🚨</div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">3. 지능형 대응 및 제어</h4>
              <p className="text-slate-600">분석 결과를 바탕으로 건축 시스템이 자동 작동하고, 텔레그램 봇으로 시민에게 정보를 전달합니다.</p>
            </button>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-xl shadow-md transition-opacity duration-500 min-h-[150px]">
          {current ? details[current as keyof typeof details] : <p className="text-center text-slate-500">위의 카드를 클릭하여 각 단계별 상세 정보를 확인하세요.</p>}
        </div>
      </div>
    </section>
  );
}

export default System;
