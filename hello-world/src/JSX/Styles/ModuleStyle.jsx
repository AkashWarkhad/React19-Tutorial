import styles from "./StyleModule.module.css" // Import changed when we use module css

export const ModuleStyle = ({ children, status = "pass" }) => 
{
  return <div className={`${styles.base} ${styles[status]}`}>
    {children}
    </div>;
};
