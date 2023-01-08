export default function JobOpening(props: any) {
    const jobOpening = props.job;
    const updateDate = new Date(jobOpening.updated_at);

    return <div className="w-[340px] h-36 bg-slate-100 py-2 px-5 rounded-lg shadow-md">
        <div className="h-16">
            <div className="font-bold text-lg mt-5 text-slate-900 leading-5">{jobOpening.title}</div>
            <div className="font-semibold text-slate-500 mb-5">{jobOpening.location.name}</div>
        </div>

        <div className="justify-between gap-2 flex-wrap flex items-center">
            <span className="text-slate-800">{"Updated at " + updateDate.toLocaleDateString("en-US")}</span>
            <a href={"https://boards.greenhouse.io/hypixelstudios/jobs/" + jobOpening.id} className="bg-blue-700 hover:bg-blue-800 py-2 px-4 rounded-md text-blue-50 font-medium">Apply</a>
        </div>
    </div>
}