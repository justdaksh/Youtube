
export function VideoCard(props: any) {
    return (
        <>  
            <div className="cursor-pointer hover:bg-gray-100 hover:bg-opacity-25 transition duration-300 rounded-xl">
            <div className="grid grid-cols-12">
                <div className="col-span-12">
                <img className="rounded-lg w-full" src={props.image} alt="My Photo" />
                </div>
            </div>
            <div className="grid grid-cols-12 pt-4" >
                <div className="col-span-1 md:col-span-2 lg:col-span-2">
                <img className="rounded-full w-12 h-12" src={props.thumbimage} alt="My Photo" />
                </div>
                <div className="col-span-11 md:col-span-10 lg:col-span-10 ml-2">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 text-sm">
                            <p>{props.title}</p>
                        </div>
                        <div className="col-span-12 text-gray-400 text-sm">
                            <p>{props.name}</p>
                        </div>
                        <div className="col-span-12 text-gray-400 text-sm">
                            <p>{props.views} | {props.time} </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}