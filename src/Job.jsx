import { MdLocationOn } from "react-icons/md";
import { CiDollar } from "react-icons/ci";

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 text-[#7E90FE] font-bold border rounded border-[#7E90FE] mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 text-[#7E90FE] font-bold border rounded border-[#7E90FE]">{job_type}</button>
                </div >
                <div className="mt-4 flex gap-2">
                    <h1 className="flex"><MdLocationOn className="text-2xl mr-1"></MdLocationOn>{location}</h1>
                    <h1 className="flex"> <CiDollar className="text-2xl mr-1"></CiDollar>{salary} </h1>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;