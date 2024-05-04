import aboutImage from "../assets/images.jpg";
import hero from "../assets/hero.png";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

export default function Home() {
  return (
    <section
      className="flex flex-col md:flex-row px-10 py-10 bg-gray-100  min-h-screen items-center"
      id="home"
    >
      <div className="w-1/2">
        <h1 className="text-6xl font-hero-font">
          Hi!, <br /> I'm{" "}
          <span className="text-gray-500 home-text">Kumaravel</span>
          <br />
          <p>I'm a Full stack Developer</p>
        </h1>
        <div className="flex py-5 gap-2">
          <a
            href="https://www.linkedin.com/in/kumaravel-thondaman"
            target="_blank"
            className="hover:text-gray-300 icon-link"
          >
            <CiLinkedin size={40} />
          </a>
          <a href="#" className="hover:text-gray-300 icon-link">
            <CiInstagram size={40} />
          </a>
          <a href="#" className="hover:text-gray-300 icon-link">
            <CiTwitter size={40} />
          </a>
        </div>
      </div>
      <div className="w-1/2 flex flex-end justify-end">
        <img className="h-50 w-100 object-none" alt="" src={hero} />
      </div>
    </section>
  );
}
