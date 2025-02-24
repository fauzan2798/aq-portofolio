import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0br37ob", "template_tr3g7tn", form.current, {
        publicKey: "zxD4MKJ2BxLmS1ONb",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setIsLoading(false);
          setSuccess("Message Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-cyan">{isLoading ? "Sending..." : success}</p>
      <form
        className="flex flex-col gap-4 text-white"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={handleName}
          className="h-12 rounded-lg bg-lightbrown px-2"
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={handleEmail}
          className="h-12 rounded-lg bg-lightbrown px-2"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          rows={"9"}
          cols={"50"}
          value={message}
          onChange={handleMessage}
          className=" rounded-lg bg-lightbrown p-2"
        />

        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkcyan bg-cyan transition-all duration-500"
          onClick={() => setIsLoading(true)}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
