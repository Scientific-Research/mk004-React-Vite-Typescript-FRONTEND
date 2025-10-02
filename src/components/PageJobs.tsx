import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Jobs from '../data/jobs.json'; getting the data from Backend using axios

interface IJobs {
  id: number;
  title: string;
  company: string;
  url: string;
  description: string;
  skillList: string;
  todo: string;
}

export const PageJobs = () => {
  const [jobs, setJobs] = useState<IJobs[]>([]);

  useEffect(() => {
    (async () => {
      const jobs = (await axios.get('http://localhost:8000/jobs')).data;
      console.log(jobs);
      // const _jobs = ...{jobs}
      // setJobs(...jobs);
    })();
  }, []);

  // return (
  //   <div className="pageJobs">
  //     <h2>There are {Jobs.length} jobs:</h2>
  //     <div className="jobs">
  //       {Jobs.map((job: IJobs) => (
  //         <div className="job">
  //           <React.Fragment key={job.id}>
  //             <a href={job.url} target="_blank">
  //               <h2>{job.title}</h2>
  //             </a>
  //             <h4>{job.company}</h4>
  //             <p className="description">{job.description}</p>
  //             <p className="skillList">{job.skillList}</p>
  //             <p className="todo">{job.todo}</p>
  //           </React.Fragment>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
};
