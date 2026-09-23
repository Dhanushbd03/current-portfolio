import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Section from "./Section";

const contact_links = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dhanushbd03",
    href: "https://www.linkedin.com/in/dhanushbd03",
    Icon: FaLinkedin,
  },
  {
    label: "Email",
    value: "bddhanush03@gmail.com",
    href: "mailto:bddhanush03@gmail.com",
    Icon: SiGmail,
  },
  {
    label: "GitHub",
    value: "github.com/Dhanushbd03",
    href: "https://github.com/Dhanushbd03",
    Icon: FaGithub,
  },
];

const Contact = () => {
  return (
    <div className="mx-auto max-w-page px-5 sm:px-6">
      <Section id="contact" title="Contact">
        <h3 className="max-w-xl text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          Looking Forward to Your Thoughts
        </h3>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-mute">
          If you have questions about my expertise or suggestions for
          improvement, I&apos;d be happy to connect.
        </p>
        <ul className="mt-10 max-w-2xl divide-y divide-line border-y border-line">
          {contact_links.map(({ label, value, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <span className="flex items-center gap-3 text-ink">
                  <Icon className="size-4 text-accent" aria-hidden="true" />
                  {label}
                </span>
                <span className="text-sm text-mute transition-colors group-hover:text-accent sm:text-right">
                  {value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
};

export default Contact;
