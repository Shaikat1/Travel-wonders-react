import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                <img src="https://i.ibb.co/n8qQJWY/404-1.gif" alt="" />
                <p className="text-3xl">OOPS Sorry !!!</p>
                <Link to="/"><a rel="noopener noreferrer" href="#" className=" font-semibold  dark:bg-violet-400 dark:text-gray-900 px-7 py-3 rounded-lg m-1 bg-[#1195b2] text-white hover:cursor-pointer">Back to homepage</a></Link>
            </div>
        </section>
        </div>
    );
};

export default ErrorPage;