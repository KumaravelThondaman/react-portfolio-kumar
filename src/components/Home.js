import aboutImage from '../assets/images.jpg'
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";





export default function Home() {
    return(
        <section className='flex flex-col md:flex-row px-10 py-40' id="home">
            <div className='w-1/2'>
                <h1 className='text-6xl font-hero-font'>Hi!, <br/> I'm <span className='text-green-300'>Kumaravel</span>
                <p>I'm a Full stack Developer</p></h1>
                <div className='flex py-5 gap-2'>
                <a href='#' className='hover:text-green-300'><CiLinkedin size={40} /></a>
                <a href='#' className='hover:text-green-300'><CiInstagram size={40} /></a>
                <a href='#' className='hover:text-green-300'><CiTwitter size={40} /></a>
                </div>
            </div>
            <div className='w-1/2'>
                <img className="h-50 w-100 object-none" alt="" src={aboutImage} />
            </div>
</section>
    )
}