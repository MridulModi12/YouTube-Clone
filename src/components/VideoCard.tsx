export function VideoCard(props: any) {
    return <div className="p-3">
        <img src={props.thumbImg} className="rounded-xl"></img>
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
                <img src={props.channel_profile} className="rounded-full w-10 h-10"></img>
            </div>
            <div className="col-span-11 pl-2">
                <div>
                    {props.title}
                </div>
                <div className="text-gray-400 text-sm">
                    {props.author}
                </div>
                <div className="text-gray-400 text-sm">
                    {props.views} | {props.timestamp}
                </div>
            </div>
        </div>
    </div>
}