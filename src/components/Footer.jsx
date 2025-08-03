const Footer = () => {
    return <footer className="dark:bg-[#191919] bg-[#E5E7EB] py-13">
        <div className="flex flex-wrap justify-center gap-3">
            <div className="w-full">
                <h1 className="dark:text-white text-gray-800 text-center">© 2025 Muhammad Abdi Fardani</h1>
            </div>
            <div>
                <ul className="flex gap-6">
                    <li>
                        <a className="dark:text-white text-gray-800" href="">GitHub</a>
                    </li>
                    <li>
                        <a className="dark:text-white text-gray-800" href="">LinkedIn</a>
                    </li>
                    <li>
                        <a className="dark:text-white text-gray-800" href="">Email</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
}
export default Footer;