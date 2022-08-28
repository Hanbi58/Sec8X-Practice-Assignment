import styles from "./DataDis.module.css";
function DataDis(props) {
  if (!props.name || !props.age) return null;
  return (
    <div>
      <div className={styles.dis}>
        Name:{props.name} Age:{props.age}
      </div>
    </div>
  );
}

export default DataDis;
