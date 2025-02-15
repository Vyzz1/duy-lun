import { Cake, Gift, Sparkles } from "lucide-react";
import ColourfulText from "../ui/colourful-text";

const BirthdayMessage = () => {
  return (
    <section className="px-4 py-12 ">
      <div className="max-w-2xl mx-auto rounded-lg shadow-xl overflow-hidden">
        <div className="relative h-40">
          <div className="p-6 ">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
              Chúc mừng sinh nhật <ColourfulText text="Duy Lùn" />
            </h1>
          </div>
        </div>
        <div className="p-8 space-y-6 mt-2">
          <p className="text-lg text-gray-700 leading-relaxed font-semibold">
            Chúc mừng sinh nhật bạn yêu quý! 🎉 Chúc bạn luôn mạnh khỏe, hạnh
            phúc và thành công trong mọi bước đi trên con đường học tập và sự
            nghiệp. Năm nay bạn đã bước sang năm 3 rồi, chặng đường kế toán đầy
            thử thách và thú vị vẫn còn nhiều phía trước.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-semibold">
            Hy vọng bạn luôn giữ vững niềm đam mê với ngành học này, không ngừng
            học hỏi và phát triển bản thân. Chúc bạn có một năm mới tràn đầy
            niềm vui, may mắn và những cơ hội mới.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-semibold">
            Hãy cứ mạnh mẽ và tự tin, vì những điều tốt đẹp đang chờ đón bạn ở
            phía trước. Sinh nhật vui vẻ nhé, và đừng quên dành thời gian để thư
            giãn và tận hưởng những khoảnh khắc tuyệt vời của tuổi trẻ!
          </p>
          <div className="flex justify-center space-x-4 text-black font-semibold">
            <Cake size={24} />
            <Gift size={24} />
            <Sparkles size={24} />
          </div>
          <p className="text-center text-lg font-semibold text-gray-800">
            Thân ái!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BirthdayMessage;
