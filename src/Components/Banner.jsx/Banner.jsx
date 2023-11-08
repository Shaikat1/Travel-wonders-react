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
                <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className=" text-5xl font-bold">Hello there</h1>
                <p className="">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            </div>
                </div>
                <div>
                <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className=" text-5xl font-bold">Hello there</h1>
                <p className="">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
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