export default function HomePage() {
	return (
		<div className="">
			{/* 그라디언트  섹션 */}
			<div className="bg-green-gradient h-[513px] pb-[20px] rounded-b-3xl shadow-layered">
				<div className="w-full text-center mt-[56px]">
					<div className="text-gray-400 text-body-1 ">
						어떤 상황을 연습해볼까요?
					</div>
					<div className="font-bold text-[26px] line-[32px] text-gray-700">
						응급 상황 연습
					</div>
				</div>
			</div>

			{/* CTA */}
			<div className="pt-6 px-5">
				<button type="button" className="bg-white w-full rounded-2xl">
					어떤 상황이 나올지 몰라요
				</button>
			</div>
		</div>
	);
}
