import styles from './Input.module.css';

export const Input = ({value, onChange}) => {
  const onHandleChange = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  }

  return <input className={styles.Input} type="text" placeholder="Search" value={value} onChange={onHandleChange} />
};
