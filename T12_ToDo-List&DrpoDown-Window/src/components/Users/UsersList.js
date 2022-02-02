import React from 'react';
import Card from '../UI/Card';
import styles from './UsersList.module.css';

const UsersList = props => {

    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map(user => {
                    return <li key = {user.key}>{user.name} (Age {user.age}) </li>
                })}
            </ul>

        </Card>
    )
}

export default UsersList;