import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

function ContactMeRight() {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src="../../../public/images/email-image.png"
        alt=""
        className="max-w-[300px]"
      />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
}

export default ContactMeRight;
