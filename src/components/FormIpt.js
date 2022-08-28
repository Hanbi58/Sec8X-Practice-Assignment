import styles from "./FormIpt.module.css";

function FormIpt(props) {
  const newData = { key: Math.random() };

  const getNewName = (event) => {
    newData.name = event.target.value;
  };
  const getNewAge = (event) => {
    newData.age = event.target.value;
  };
  const onSubHandler = (event) => {
    event.preventDefault();

    props.dataCollector(newData);
  };

  return (
    <form className={styles.frm} onSubmit={onSubHandler}>
      <label htmlFor="name">
        Name:
        <input type="text" id="name" onChange={getNewName} />
      </label>

      <label htmlFor="age">
        Age:
        <input type="text" id="age" onChange={getNewAge} />
      </label>

      <button className={styles.btn}>Add</button>
    </form>
  );
}

export default FormIpt;
