import { useEffect } from "react";
import { useState } from "react";
import Job from "./Job";



const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

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
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job> )
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;