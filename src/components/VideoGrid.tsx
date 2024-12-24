import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    thumbImg: "/thumb1.png",
    channel_profile: "/channel_profile1.jpg",
    title: "Gracie Abrams: That's So True (Live) - SNL",
    author: "Saturday Night Live",
    views: "600K views",
    timestamp: "8 days ago"
},{
    thumbImg: "/thumb2.png",
    channel_profile: "/channel_profile2.jpg",
    title: "Ultimate Tailwind CSS Tutorial // Build a Discord-inspired Animated Navbar",
    author: "Fireship",
    views: "1.4M views",
    timestamp: "3 years ago"
},{
    thumbImg: "/thumb3.png",
    channel_profile: "/channel_profile3.jpg",
    title: "Don't Buy Fitness Bands, Get This Instead! ft Galaxy Watch FE",
    author: "TechWiser",
    views: "17K views",
    timestamp: "13 hours ago"
},{
    thumbImg: "/thumb4.png",
    channel_profile: "/channel_profile4.jpg",
    title: "Are you Garbage at React?",
    author: "Tenacity",
    views: "754 views",
    timestamp: "3 days ago"
},{
    thumbImg: "/thumb1.png",
    channel_profile: "/channel_profile1.jpg",
    title: "Gracie Abrams: That's So True (Live) - SNL",
    author: "Saturday Night Live",
    views: "600K views",
    timestamp: "8 days ago"
},{
    thumbImg: "/thumb2.png",
    channel_profile: "/channel_profile2.jpg",
    title: "Ultimate Tailwind CSS Tutorial // Build a Discord-inspired Animated Navbar",
    author: "Fireship",
    views: "1.4M views",
    timestamp: "3 years ago"
},{
    thumbImg: "/thumb3.png",
    channel_profile: "/channel_profile3.jpg",
    title: "Don't Buy Fitness Bands, Get This Instead! ft Galaxy Watch FE",
    author: "TechWiser",
    views: "17K views",
    timestamp: "13 hours ago"
},{
    thumbImg: "/thumb4.png",
    channel_profile: "/channel_profile4.jpg",
    title: "Are you Garbage at React?",
    author: "Tenacity",
    views: "754 views",
    timestamp: "3 days ago"
},{
    thumbImg: "/thumb1.png",
    channel_profile: "/channel_profile1.jpg",
    title: "Gracie Abrams: That's So True (Live) - SNL",
    author: "Saturday Night Live",
    views: "600K views",
    timestamp: "8 days ago"
},{
    thumbImg: "/thumb2.png",
    channel_profile: "/channel_profile2.jpg",
    title: "Ultimate Tailwind CSS Tutorial // Build a Discord-inspired Animated Navbar",
    author: "Fireship",
    views: "1.4M views",
    timestamp: "3 years ago"
},{
    thumbImg: "/thumb3.png",
    channel_profile: "/channel_profile3.jpg",
    title: "Don't Buy Fitness Bands, Get This Instead! ft Galaxy Watch FE",
    author: "TechWiser",
    views: "17K views",
    timestamp: "13 hours ago"
},{
    thumbImg: "/thumb4.png",
    channel_profile: "/channel_profile4.jpg",
    title: "Are you Garbage at React?",
    author: "Tenacity",
    views: "754 views",
    timestamp: "3 days ago"
}]

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {VIDEOS.map((video) => <div>
            <VideoCard
                thumbImg={video.thumbImg}
                channel_profile={video.channel_profile}
                title={video.title}
                author={video.author}
                views={video.views}
                timestamp={video.timestamp}
            ></VideoCard>
        </div>)}
    </div>
}