import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import 'swiper/css';
import 'swiper/css/navigation';

const VideoFeed = () => {
    const reels = [
        { id: 1, views: '36.7K', videoUrl: 'https://tikfeed-cdn.neomega.tools/labelamrita.myshopify.com/ig/3872302896733871242_video_longer_thumbnail.mp4' },
        { id: 2, views: '41K', videoUrl: 'https://tikfeed-cdn.neomega.tools/labelamrita.myshopify.com/ig/3872299347547345823_video_longer_thumbnail.mp4' },
        { id: 3, views: '27.5K', videoUrl: 'https://tikfeed-cdn.neomega.tools/labelamrita.myshopify.com/ig/3872292327616240949_video_longer_thumbnail.mp4' },
        { id: 4, views: '517K', videoUrl: 'https://tikfeed-cdn.neomega.tools/labelamrita.myshopify.com/ig/3872192967566032462_video_longer_thumbnail.mp4' },
        { id: 5, views: '891K', videoUrl: 'https://tikfeed-cdn.neomega.tools/labelamrita.myshopify.com/ig/3872161928500315704_video_longer_thumbnail.mp4' },
        { id: 3, views: '27.5K', videoUrl: 'https://tikfeed-cdn.neomega.tools/labelamrita.myshopify.com/ig/3872292327616240949_video_longer_thumbnail.mp4' },
        { id: 4, views: '517K', videoUrl: 'https://tikfeed-cdn.neomega.tools/labelamrita.myshopify.com/ig/3872192967566032462_video_longer_thumbnail.mp4' },
        { id: 5, views: '891K', videoUrl: 'https://tikfeed-cdn.neomega.tools/labelamrita.myshopify.com/ig/3872161928500315704_video_longer_thumbnail.mp4' },
        // Add more items as needed
    ];

    return (
        <section className="py-12 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Heading Section */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 italic tracking-tight">
                        #ShopTheLook
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base">
                        Follow us on Instagram for exciting content
                    </p>
                </div>

                {/* Slider Container */}
                <div className="relative group">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={12}
                        slidesPerView={2.2}
                        navigation
                        breakpoints={{
                            640: { slidesPerView: 3.2 },
                            1024: { slidesPerView: 5.2 },
                            1280: { slidesPerView: 6 },
                        }}
                        className="video-swiper"
                    >
                        {reels.map((reel) => (
                            <SwiperSlide key={reel.id}>
                                <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-gray-100 group/item cursor-pointer shadow-sm">
                                    {/* Video Element */}
                                    <video
                                        src={reel.videoUrl}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        muted
                                        loop
                                        playsInline
                                        onMouseOver={(e) => e.currentTarget.play()}
                                        onMouseOut={(e) => e.currentTarget.pause()}
                                    />

                                    {/* View Count Overlay */}
                                    {/* <div className="absolute bottom-3 left-3 flex items-center bg-black/40 backdrop-blur-md px-2 py-1 rounded-md text-white text-[10px] font-bold tracking-wider">
                                        <PlayArrowIcon sx={{ fontSize: 14 }} className="mr-1" />
                                        {reel.views}
                                    </div> */}

                                    {/* Glassmorphism Hover Overlay */}
                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                                            <PlayArrowIcon className="text-white" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Global Custom CSS for Swiper Buttons */}
            <style jsx global>{`
                .video-swiper .swiper-button-next,
                .video-swiper .swiper-button-prev {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                    color: #db2777; /* pink-600 */
                    padding: 10px,
                }
                .video-swiper .swiper-button-next:after,
                .video-swiper .swiper-button-prev:after {
                    font-size: 15px;
                    font-weight: bold;
                }
                .video-swiper .swiper-button-next { right: 0px; }
                .video-swiper .swiper-button-prev { left: -0px; }
                
                @media (max-width: 1024px) {
                    .video-swiper .swiper-button-next,
                    .video-swiper .swiper-button-prev { display: none; }
                }
            `}</style>
        </section>
    );
};

export default VideoFeed;