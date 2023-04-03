import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type ContactData = {
  icon: IconProp;
  label: string;
  info: string;
};

const ContactSection = ({ icon, label, info }: ContactData) => {
  return (
    <div className="flex items-center">
      <FontAwesomeIcon icon={icon} size="2x" />
      <div className="ml-5">
        <div className="md:text-2xl md:font-semibold">{label}</div>
        <div className="md:font-medium">{info}</div>
      </div>
    </div>
  );
};

export default ContactSection;
