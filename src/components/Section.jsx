import PropTypes from "prop-types";

const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="border-t border-line py-20 md:py-28">
      <h2 className="text-2xl font-medium tracking-tight text-ink md:text-3xl">
        {title}
      </h2>
      <div className="mt-10 md:mt-14">{children}</div>
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
