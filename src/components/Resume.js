import ResumeImg from '../assets/Explainer-Write-Resume.jpg'
export default function Resume() {
return(
    <section className='flex flow-col md:flex-row px-10 py-40 gap-10' id="resume">
        <div className='flex w-1/2'>
            <img alt='' src={ResumeImg}></img>
        </div>
        <div className='py-20 px-40'>
            <h1 className='text-4xl font-bold py-5'>Resume</h1>
            <div className='flex justify-center gap-5'>
            <p>You can view my resume <span><a href="" className='resume-btn'>Download</a> </span></p>
            </div>
        </div>
    </section>
)
}