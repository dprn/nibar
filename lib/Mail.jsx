import styles from "./styles.jsx";

const render = ({ output }) => {
  return (
    <div style={output.cs > 0 || output.gmail > 0 ? { color: styles.colors.red } : null}>
      <span>􀍗 {output.gmail}/{output.cs}</span>
    </div>
  );
};

export default render;

