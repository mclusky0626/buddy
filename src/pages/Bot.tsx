import { useState } from 'react';

type Message = { from: 'user' | 'bot'; text: string };

const responses: Record<string, string> = {
  '/set_home': '📍 위치 공유 기능을 사용하여 집 위치를 설정해주세요. 이 정보는 맞춤형 알림에 사용됩니다.',
  '/status': '🛰️ GDACS 최신 재난 정보를 확인 중입니다... 현재 집 근처에 보고된 주요 재난이 없습니다. 안전합니다.',
  '/latest_earthquake': '🌍 USGS 조회 결과: 최근 지진은 3시간 전 일본 오키나와 해역에서 규모 4.5로 발생했습니다.',
  '/nearest_shelter': "🏠 OpenStreetMap에서 주변 대피소를 검색 중입니다... 가장 가까운 대피소는 '인천광역시청'이며, 도보 10분 거리입니다. [지도 보기]",
};

function Bot() {
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: '안녕하세요! 재난 안전 알리미입니다. /start 명령어로 시작하세요.' },
  ]);

  const handleCommand = (command: string, label: string) => {
    setMessages(prev => [...prev, { from: 'user', text: label }, { from: 'bot', text: responses[command] }]);
  };

  return (
    <section className="py-20 bg-slate-100" id="bot">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800">텔레그램 봇: 스마트 재난 소통의 중심</h3>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">저희 시스템의 '눈과 귀', 그리고 '목소리' 역할을 하는 텔레그램 봇입니다. 아래 버튼을 클릭하여 봇이 어떻게 사용자와 소통하는지 직접 체험해보세요.</p>
        </div>
        <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gray-200 p-3 flex items-center">
            <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-xl">AI</div>
            <div className="ml-3">
              <p className="font-bold text-slate-800">재난 안전 알리미</p>
              <p className="text-sm text-slate-500">온라인</p>
            </div>
          </div>
          <div id="chat-window" className="p-4 h-96 overflow-y-auto bg-gray-50">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
                <div className={`${m.from === 'user' ? 'bg-teal-500 text-white' : 'bg-gray-200 text-slate-800'} p-3 rounded-lg max-w-xs`}>
                  <p>{m.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="grid grid-cols-2 gap-2">
              <button className="telegram-command-btn bg-teal-500 text-white text-sm font-semibold p-2 rounded-lg" onClick={() => handleCommand('/set_home','📍 집 위치 설정')}>📍 집 위치 설정</button>
              <button className="telegram-command-btn bg-teal-500 text-white text-sm font-semibold p-2 rounded-lg" onClick={() => handleCommand('/status','🛰️ 현재 재난 상황')}>🛰️ 현재 재난 상황</button>
              <button className="telegram-command-btn bg-teal-500 text-white text-sm font-semibold p-2 rounded-lg" onClick={() => handleCommand('/latest_earthquake','🌍 최근 지진 정보')}>🌍 최근 지진 정보</button>
              <button className="telegram-command-btn bg-teal-500 text-white text-sm font-semibold p-2 rounded-lg" onClick={() => handleCommand('/nearest_shelter','🏠 가장 가까운 대피소')}>🏠 가장 가까운 대피소</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bot;