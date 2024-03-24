import { useEffect } from "react";
import { useState } from "react";
import Job from "./Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDatalength] = useState(4); //initially 4 ta data dekhabo tai

    useEffect(() =>{
        fetch('./jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    }, []);
    return (
        <div>
            <div>
                <h2 className="text-5xl text-center">Featured jobs : {jobs.length}</h2>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, voluptatibus.</p>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-6">
                {
                    jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job> )
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <button onClick={() => setDatalength(jobs.length)}
                 className="btn btn-primary">Show ALl Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;