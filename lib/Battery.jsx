import styles from "./styles.jsx";

const render = ({ output }) => {
  let charging = output.charging;
  let percentage = output.percentage;
  let remaining = output.remaining;
  let icon = percentage < 50 ? (percentage < 25 ? "􀛪" : "􀛩 ") : "􀛨";
  return (
    <div>
      <div
        style={
          percentage < 10 && charging == false
            ? { color: styles.colors.red }
            : null
        }
      >
        <span>{charging ? "􀋦" : null} {icon} {percentage}%</span>
      </div>
    </div>
  );
};

export default render;
