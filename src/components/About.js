import AboutImage from "../assets/images.jpg";
import hero from "../assets/hero.png";
import me from "../assets/1713061774338.jpg";
export default function About() {
  return (
    <section
      className="flex px-10 py-40 flex-col md:flex-row space-x-80"
      id="about"
    >
      <div className="flex w-1/2 w-[400px]">
        <img alt="" src={me} />
      </div>
      <div className="flex flex-col gap-3 w-full md:w-1/2 p-y-10">
        <h1 className="text-4xl font-bold">
          About <span className="text-green-300">Me</span>
        </h1>
        <h2 className="text-2xl">I'm Kumaravel</h2>
        <h3>Full stack Developer</h3>
        <p>
          I am a Full-Stack developer based in chennai, India. I am an
          Information Technology postgraduate from Alagappa University. I am
          very passionate about improving my coding skills & developing
          applications & websites. I build WebApps and Websites using MERN
          Stack. Working for myself to improve my skills.
        </p>
      </div>
    </section>
  );
}
