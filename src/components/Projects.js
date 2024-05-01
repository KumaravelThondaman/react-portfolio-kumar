import Acrt from '../assets/b2c2ad43337058886f5516008334ae64.jpg'
import Lrn from '../assets/1624283519996.jpg'
import Pf from '../assets/explore-use-case-cover-image.png'

export default function Project() {
    return (
        <section className="flex px-10 py-40 flex-col" id="project">
            <div className="flex justify-center py-10">
                <h1 className="text-4xl font-bold">Projects</h1>
            </div><br/>
            <div className=" flex flex-col md:flex-row gap-40 justify-center ">
                <div className="relative">
                <img alt="" className="h-[300px] w-[300px]" src={Acrt}></img>
                <div className="project-desc">
                    <p className="text-center py-5">ACRT is a comprehensive auditing control and reporting tool designed to streamline auditing processes for businesses across various industries. Whether it's financial audits, compliance checks, or quality assurance assessments, ACRT provides a robust platform to manage and execute audits efficiently.</p>
                </div>
                </div>
                <div className="relative">
                <img alt="" className="h-[300px] w-[300px]" src={Lrn}></img>
                <div className="project-desc">
                    <p className="text-center py-5">LRN is a comprehensive Learning Management System (LMS) designed to facilitate online education and training. It serves as a centralized platform for administrators and users to manage and participate in various learning activities, courses, and resources.</p>
                </div>
                </div>
                <div className="relative">
                <img alt="" className="h-[300px] w-[300px]" src={Pf}></img>
                <div className="project-desc">
                    <p className="text-center py-5">ACRT is a comprehensive auditing control and reporting tool designed to streamline auditing processes for businesses across various industries. Whether it's financial audits, compliance checks, or quality assurance assessments, ACRT provides a robust platform to manage and execute audits efficiently.</p>
                </div>
                </div>
            </div>
        </section>
    )
}