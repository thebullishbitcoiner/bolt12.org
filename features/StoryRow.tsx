import Image, {StaticImageData} from "next/image"

export type StoryFrame = {
    image: StaticImageData,
    alt: string,
    caption: string
}

export type Story = StoryFrame[]

export type Stories = {
    [key: string]: Story
}

type StoryRowProps = {
    story: Story;
}

export default function StoryRow(props:StoryRowProps) {
    return(
        <div className="bg-gray-50 rounded-3xl border border-gray-200 shadow-inner w-full mb-8 px-4 py-1 pb-4">
            <div className="w-full flex  overflow-x-scroll  flex-row gap-0 items-start justify-items-center mx-auto zazzy-scroll zazzy-scroll-track zazzy-scroll-thumb">
                {props.story.map((story, index) => (
                    <div key={index} className="flex flex-col gap-4 w-[264px] min-w-[264px] px-4 py-8 first:pl-8 first:pr-0 first:mr-4 last:pr-8 last:pl-0 last:ml-4">
                        <Image src={story.image} alt={story.alt} width={250} placeholder="blur" className="border border-gray-200 rounded-2xl" />
                        <p className="text-xs text-center text-gray-500">{story.caption}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}