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
      <h2>There are {Jobs.length} jobs:</h2>
      <div className="jobs">
        {Jobs.map((job) => (
          <div className="job">
            <React.Fragment key={job.id}>
              <a href={job.url} target="_blank">
                <h2>{job.title}</h2>
              </a>
              <h4>{job.company}</h4>
              <p className="description">{job.description}</p>
              <p className="skillList">{job.skillList}</p>
              <p className="todo">{job.todo}</p>
            </React.Fragment>
          </div>
        ))}
      </div>
    </div>
  );
};
