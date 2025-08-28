function Listnav({ text, href, handleClick }) {
  return (
    <li>
      <a
        onClick={handleClick}
        className="text-3xl lg:text-4xl text-black dark:text-white md:text-5xl xl:text-6xl font-semibold tracking-[2px]"
        href={href}
      >
        {text}    
      </a>
    </li>
  )
}

export default Listnav;
