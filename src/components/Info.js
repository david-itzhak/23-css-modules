import './Info.css';
import styles from './Info.module.css';

console.log(styles);
function Info() {
    return (
        <div className={styles.info}>
            <h1>Hello from info component</h1>
            <h2>Heading in the Info component</h2>
            <button className="my-button">Click me in the Info component</button>
            <button className={styles.myOtherButton}>My other button with local CSS style</button>
        </div>
    )
}

export default Info;