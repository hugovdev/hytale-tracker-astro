export default function JobOpening(props: any) {
    const jobOpening = props.job;
    const updateDate = jobOpening ? new Date(jobOpening.updated_at) : null;

    return <div className="w-[340px] h-36 bg-slate-100 py-2 px-5 rounded-lg shadow-md">
        <div className="h-16">
            {jobOpening ?
                <div className="font-bold text-lg mt-5 text-slate-900 leading-5">{jobOpening.title}</div> :
                <div className="border-t-[24px] animate-pulse rounded-md border-slate-500 w-4/5 mt-5 mb-2" />}

            {jobOpening ?
                <div className="font-semibold text-slate-500 mb-5">{jobOpening.location.name}</div> :
                <div className="border-t-[12px] animate-pulse rounded-md border-slate-300 w-2/5 mb-5" />}
        </div>

        <div className="justify-between gap-2 flex-wrap flex items-center">
            <span className="text-slate-800">{"Updated at " + (jobOpening ? updateDate?.toLocaleDateString("en-US") : "")}</span>
            <a href={jobOpening ? ("https://boards.greenhouse.io/hypixelstudios/jobs/" + jobOpening.id) : "#"} className="bg-blue-700 hover:bg-blue-800 py-2 px-4 rounded-md text-blue-50 font-medium">Apply</a>
        </div>
    </div>
}