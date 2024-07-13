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
        <h1 className="text-4xl font-hero-font">
          Welcome to My Portfolio
          <br />
          <br />
          Meet <span className="text-gray-500 home-text">Kumaravel</span>
          <span>: Your Fullstack Developer</span>
          <br />
          <br />
          <p className="text-2xl">
            Hello there! I'm Kumaravel, a passionate fullstack developer
            dedicated to crafting elegant and efficient digital solutions. With
            a keen eye for detail and a love for innovation, I specialize in
            building dynamic web applications that blend creativity with
            functionality. Whether it's front-end design or back-end
            development, I thrive on turning ideas into reality through clean
            code and intuitive user experiences. Explore my portfolio to
            discover my projects, skills, and journey in the world of software
            development.
          </p>
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
        <img
          className="h-50 w-100 object-none transition-transform duration-500 transform hover:rotate-1 hover:shake"
          alt=""
          src={hero}
        />
      </div>
    </section>
  );
}
