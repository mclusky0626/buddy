import { useEffect, useRef } from 'react';

function Vision() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (canvasRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - Chart is loaded from CDN
      const Chart = window.Chart;
      chartRef.current = new Chart(canvasRef.current.getContext('2d'), {
        type: 'bar',
        data: {
          labels: ['인명/재산 피해 최소화', '도시 회복탄력성 극대화', '성공적 국제 협력 모델'],
          datasets: [
            {
              label: '기대 효과 지수',
              data: [90, 85, 75],
              backgroundColor: [
                'rgba(20, 184, 166, 0.6)',
                'rgba(15, 118, 110, 0.6)',
                'rgba(13, 148, 136, 0.6)'
              ],
              borderColor: [
                'rgb(20, 184, 166)',
                'rgb(15, 118, 110)',
                'rgb(13, 148, 136)'
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              beginAtZero: true
            }
          }
        }
      });
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white" id="vision">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800">기대 효과 및 향후 계획</h3>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">저희 시스템은 시민의 안전을 보장하고 도시의 지속가능성에 기여할 것입니다. 앞으로의 발전 계획을 확인해보세요.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-2xl font-bold text-slate-800 mb-4">기대 효과</h4>
            <p className="mb-6 text-slate-600">이 시스템을 통해 우리는 재난으로 인한 피해를 최소화하고, 도시의 회복탄력성을 극대화하며, 국가 간 성공적인 기술 협력 모델을 구축할 수 있습니다.</p>
            <div className="chart-container">
              <canvas ref={canvasRef}></canvas>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-slate-800 mb-4">향후 계획</h4>
            <ul className="space-y-4">
              <li className="flex items-start p-4 bg-slate-50 rounded-lg">
                <span className="text-teal-500 text-2xl mr-4">📈</span>
                <div>
                  <h5 className="font-bold">AI 예측 모델 고도화</h5>
                  <p className="text-slate-600">홍수, 폭염, 산불 등 다양한 재난 유형으로 예측 범위를 확장합니다.</p>
                </div>
              </li>
              <li className="flex items-start p-4 bg-slate-50 rounded-lg">
                <span className="text-teal-500 text-2xl mr-4">🏢</span>
                <div>
                  <h5 className="font-bold">건축물 데이터 통합 (BIM 연동)</h5>
                  <p className="text-slate-600">건물 설계 정보(BIM)와 연동하여 더욱 정밀한 대피 경로를 제공합니다.</p>
                </div>
              </li>
              <li className="flex items-start p-4 bg-slate-50 rounded-lg">
                <span className="text-teal-500 text-2xl mr-4">♿</span>
                <div>
                  <h5 className="font-bold">사회적 취약 계층 맞춤형 지원</h5>
                  <p className="text-slate-600">노약자, 장애인 등 취약 계층을 위한 맞춤형 알림 및 지원 기능을 심화합니다.</p>
                </div>
              </li>
              <li className="flex items-start p-4 bg-slate-50 rounded-lg">
                <span className="text-teal-500 text-2xl mr-4">⚖️</span>
                <div>
                  <h5 className="font-bold">법적/정책적 기반 마련 연구</h5>
                  <p className="text-slate-600">시스템의 안정적인 도입과 운영을 위한 법률 및 정책적 기반을 연구합니다.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
