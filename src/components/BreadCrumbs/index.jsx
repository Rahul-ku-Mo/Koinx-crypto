import { FaAngleDoubleRight } from "react-icons/fa";
const BreadCrumbs = () => {
  return (
    <nav className="text-gray-600 font-semibold">
      <ul className="flex items-center gap-2 h-10 py-6">
        <li>
          <a href="#" className="text-slate-800/60">
            Cryptocurrencies
          </a>
        </li>
        <li>
          <span className="mx-2">
            <FaAngleDoubleRight className="text-slate-800/60" />
          </span>
        </li>
        <li>
          <a
            href="#"
            className="text-slate-800 font-semibold hover:text-blue-800"
          >
            Bitcoin
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default BreadCrumbs;
