import React, {ReactNode} from 'react';
import {Component} from 'react';
import styles from './Main.module.scss';

export default class Main extends Component {
    public render(): ReactNode {
        return <div className={styles.main}>main</div>;
    }
}