
import { Button } from "..";
import styles from "./Item.module.css";
import { ICar } from '@/interfaces/car';
type ItemProps = {
    car: ICar;
    onRemove: (id: number) => void;
};

const Item = ({ car, onRemove }: ItemProps) => {
    return (
        <li className={styles.item}>
            {car.name}{" "}
            <Button type="danger" onClick={() => onRemove(car.id!)}>
                Remove
            </Button>
        </li>
    );
};

export default Item;