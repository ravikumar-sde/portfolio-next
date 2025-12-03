export default function Navbar() {
    return (
        <nav className="w-full md:w-2/3 lg:w-2/4 m-auto px-4 md:px-0 flex items-center justify-between pt-6 md:pt-8 pb-6 md:pb-8 text-[#a8adb2] top-0 z-10">
            <div className="home">
                <h1 style={{fontFamily: 'Montserrat Subrayada, sans-serif'}} className="font-extrabold text-2xl md:text-3xl">RK</h1>
            </div>
            <ul className="">
                <li className="text-lg md:text-xl font-light">Blogs</li>
            </ul>
        </nav>
    );
}