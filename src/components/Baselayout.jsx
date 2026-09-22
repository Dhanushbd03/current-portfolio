import PropTypes from "prop-types";

const Baselayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>
      {children}
    </div>
  );
};

Baselayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Baselayout;
