function Contributors() {
  return (
    <section className="py-20" id="contributors">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-10">기여</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {/* 첫 번째 인물 사진과 설명 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-slate-400">사진1</div>
            <h4 className="text-xl font-bold mb-2">인물 1</h4>
            {/* 인물 1 설명을 여기에 작성 */}
          </div>
          {/* 팀 사진과 설명 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-slate-400">팀사진</div>
            <h4 className="text-xl font-bold mb-2">팀</h4>
            {/* 팀 설명을 여기에 작성 */}
          </div>
          {/* 두 번째 인물 사진과 설명 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-slate-400">사진2</div>
            <h4 className="text-xl font-bold mb-2">인물 2</h4>
            {/* 인물 2 설명을 여기에 작성 */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contributors;
