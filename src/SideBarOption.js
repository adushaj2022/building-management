import { BsPersonCheckFill } from "react-icons/bs";
import { BsPersonSquare } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import { VscCalendar } from "react-icons/vsc";
import { BiBookContent } from "react-icons/bi";
import { BsCalendar } from "react-icons/bs";

const SideBarOption = [
  {
    id: 1,
    title: "Calender",
    logo: VscCalendar,
    address: "Calender",
  },
  {
    id: 2,
    title: "Employees",
    logo: BsPersonCheckFill,
    address: "Employees",
  },
  {
    id: 3,
    title: "Residents",
    logo: BsPersonSquare,
    address: "Residents",
  },
  {
    id: 4,
    title: "Front Desk",
    logo: FaDesktop,
    address: "FrontDesk",
  },
  {
    id: 5,
    title: "Maintence",
    logo: VscTools,
    address: "Maintence",
  },
  {
    id: 6,
    title: "Event Log",
    logo: BiBookContent,
    address: "EventLog",
  },

  {
    id: 7,
    title: "Contractors",
    logo: BsCalendar,
    address: "Contractors",
  },
];
export default SideBarOption;
