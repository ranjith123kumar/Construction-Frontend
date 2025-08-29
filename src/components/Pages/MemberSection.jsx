
import certificate from "/download (6).jpg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { TiTick } from "react-icons/ti";

const certificates = [certificate, certificate, certificate];

const MemberSection = () => {
  return (
    <div className="w-[80%] mx-auto p-5">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="md:w-1/2">
          <img src="/download (6).jpg" alt="George Clooney" className="w-full rounded-lg" />
        </div>
        <div className="md:w-1/2">
          <h1 className="font-bold text-2xl">George Clooney</h1>
          <p className="text-orange-600 my-2">Land Transport</p>
          <div className="flex gap-3 text-2xl md:text-3xl my-2">
            {[FaFacebookF, LuInstagram, BsTwitterX, FaLinkedinIn].map((Icon, i) => (
              <Icon key={i}
                className="bg-white p-2 rounded-full border-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 transition duration-300"
              />
            ))}
          </div>
          <p className="w-4/5 text-justify my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum praesentium corporis eligendi nulla earum assumenda reprehenderit natus possimus tempore sapiente numquam architecto voluptatem, amet soluta.</p>
          <h4 className="font-bold my-2">I help my clients stand out and they help me grow</h4>
          <div className="grid grid-cols-2 gap-2 w-4/5 my-3">
            {["Best Quality Services", "Time Saving", "Meet the Deadlines", "24/7 Customer Support"].map((service, i) => (
              <p key={i} className="flex items-center gap-2"><TiTick className="text-orange-600 text-2xl" /> {service}</p>
            ))}
          </div>
          <div className="w-4/5">
            <div className="my-2">
              <span>Public Relations</span>
              <input type="range" className="accent-orange-600 w-full" value={70} readOnly />
            </div>
            <div className="my-2">
              <span>Clients Daily</span>
              <input type="range" className="accent-orange-600 w-full" value={80} readOnly />
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mt-10">
        <div className=" flex flex-col justify-center">
          <p className="font-bold text-2xl">Certificates & Education</p>
          <p className="font-light mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptate molestiae fugit commodi earum eius?
          </p>
        </div>

        <div className="flex flex-3 gap-3">
          {certificates.map((cert, i) => (
            <img key={i} src={cert} alt={`Certificate ${i + 1}`} className="w-1/3 rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberSection;
