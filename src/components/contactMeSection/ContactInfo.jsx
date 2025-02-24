import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

function ContactInfo() {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="abdelrahman.qasse@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+2 01008 66 24 55" Image={FiPhone} />
      <SingleInfo text="Alexandria, Egypt" Image={IoLocationOutline} />
    </div>
  );
}

export default ContactInfo;
