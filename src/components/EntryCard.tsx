import type { NewsEntry } from "../types/NewsEntry";

export default function EntryCard(props: any) {
     const entry = props.entry as NewsEntry;

     return <div className="w-[300px] md:w-[480px] mr-5 ">
          {/*<img src={entry.picture} alt="Cover for a news entry." className="w-full rounded-t-2xl" />*/}
          <slot name="entry-image" />

          <div className="bg-slate-200 md:py-10 py-5 px-8 rounded-b-2xl w-full relative shadow-md">
               <div>
                    <div className="h-[290px] md:h-[230px]">
                         <div className="font-bold text-lg md:text-xl text-slate-900">{entry.title}</div>
                         <div className="pb-5 text-slate-500 text-sm md:text-base font-semibold">{"Published on " + new Date(entry.date).toLocaleDateString("en-US")} </div>
                         <div className="pb-5 text-slate-800 text-sm md:text-base font-medium" dangerouslySetInnerHTML={{ __html: entry.body }} />
                    </div>

                    <a href={entry.url} className="text-blue-700 hover:text-blue-800 font-semibold ">See more →</a>
               </div>
          </div>
     </div>
}