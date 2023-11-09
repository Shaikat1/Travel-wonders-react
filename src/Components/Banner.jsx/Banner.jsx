import { Carousel } from 'flowbite-react';

const Banner = () => {
    return (
        <div>
            <div className="h-screen">
            <Carousel>
                <div>
                <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/kgzcbYx/dempster-highway-yukon-valley.jpg)'}}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content" data-aos="fade-up">
                <div className="space-y-4" data-aos="fade-up">
                <h1 className=" text-5xl font-bold" >Experience everything nature has to offer</h1>
                <p className="text-2xl">Nature benefits you</p>
                
                </div>
            </div>
            </div>
                </div>
                <div>
                <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/Q6t9bkh/pexels-photo-133633-1.jpg)'}}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content" data-aos="fade-up">
                <div className="space-y-4" data-aos="fade-up">
                <h1 className=" text-5xl font-bold" >Experience everything nature has to offer</h1>
                <p className="text-2xl">Nature benefits you</p>
                
                </div>
            </div>
            </div>
                </div>
                <div>
                <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/x8bxBvz/photo-1528183429752-a97d0bf99b5a-auto-format-fit-crop-q-80-w-1000-ixlib-rb-4-0.jpg)'}}>
            <div className="hero-overlay bg-opacity-10"></div>
            <div className="hero-content text-center text-neutral-content" data-aos="fade-up">
                <div className="space-y-4" data-aos="fade-up">
                <h1 className=" text-5xl font-bold" >Experience everything nature has to offer</h1>
                <p className="text-2xl">Nature benefits you</p>
                
                </div>
            </div>
            </div>
                </div>
                
            </Carousel>
            </div>
        </div>
    );
};

export default Banner;