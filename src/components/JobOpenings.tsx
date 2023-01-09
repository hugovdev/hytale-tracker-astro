import React from "react";
import JobOpening from "./JobOpening";

class JobOpenings extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            jobs: [],
            currentJob: [],
            jobPositions: [],
            recentJobs: 0,
            jobInfo: [],
        };
    }

    analyzeJobListing(jobs: any) {
        var rJobs = 0;
        jobs.sort((jobA: any, jobB: any) =>
            new Date(jobA.updated_at) < new Date(jobB.updated_at) ? 1 : -1
        )
            .map((job: any, i: any) => {
                if (this.getDifferenceInDays(new Date(job.updated_at), new Date()) <= 7)
                    rJobs++;
                if (i <= 9) {
                    this.loadJobCard(job);
                }
            });
        this.setState({ recentJobs: rJobs });
    }

    loadJobCard(job: any) {
        this.state.jobPositions.push(
            <JobOpening
                key={job.id}
                job={job}
            />
        );
    }

    getDifferenceInDays(date1: Date, date2: Date) {
        var diff = Math.abs(date1.getTime() - date2.getTime());
        return Math.ceil(diff / (1000 * 3600 * 24));
    }

    async componentDidMount() {
        fetch(`https://boards-api.greenhouse.io/v1/boards/hypixelstudios/jobs`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log("error");
                }
            })
            .then((jsonData) => {
                this.setState({ jobs: jsonData.jobs });
                this.analyzeJobListing(jsonData.jobs);
            });
    }

    render() {
        return <div className="pb-20">
            <a href="https://hypixelstudios.com/jobs/" className="rounded-full font-medium bg-emerald-200 text-emerald-900 px-4 border-2 border-emerald-200 hover:border-emerald-300">{this.state.recentJobs} recent job updates</a>

            <div className="mt-10 flex flex-wrap gap-3 w-fit m-auto items-center justify-center lg:justify-start">
                {this.state.jobs.length > 0 ? this.state.jobPositions.map((job: any, i: any) => {
                    return job;
                }) : Array.from({ length: 10 }).map((it, index) => <JobOpening key={"job-placeholder-" + index} />)}
            </div>
        </div>;

    }
}

export default JobOpenings;
