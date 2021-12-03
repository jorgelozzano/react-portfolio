import React from 'react'
import styles from './TechPill.module.css'

const TechPill = props => {
    return (
        <div className={styles[props.type]}>
            <p className={styles.techName}>{props.tech}</p>
        </div>
    )
}

export default TechPill
