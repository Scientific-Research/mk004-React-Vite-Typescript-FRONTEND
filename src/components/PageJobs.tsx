import React from 'react';
import Jobs from '../data/jobs.json';

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
  return (
    <div className="pageJobs">
      <h1>There are {Jobs.length} jobs:</h1>
      <div className="jobs">
        {Jobs.map((job) => (
          <div className="job">
            <React.Fragment key={job.id}>
              <h2>{job.title}</h2>
              <p>{job.company}</p>
              <p>{job.description}</p>
              <p>{job.skillList}</p>
              <p>{job.todo}</p>
            </React.Fragment>
          </div>
        ))}
      </div>
    </div>
  );
};
