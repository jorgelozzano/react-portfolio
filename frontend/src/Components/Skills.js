import React from 'react'
import TechPill from './TechPill'
import styles from './Skills.module.css'

const Skills = () => {
    return (
        <div className={styles['skills-wrapper']}>
            <div className={styles['mySkills-wrapper']}>
                <h3 className={styles['skills-title']}>Skills</h3>
                <ul>
                    <li><TechPill tech="Java" type="skill" /></li>
                    <li><TechPill tech="CSS" type="skill" /></li>
                    <li><TechPill tech="HTML" type="skill" /></li>
                    <li><TechPill tech="JavaScript" type="skill" /></li>
                    <li><TechPill tech="React" type="skill" /></li>
                    <li><TechPill tech="Python" type="skill" /></li>
                    <li><TechPill tech="Git" type="skill" /></li>
                    <li><TechPill tech="MySQL" type="skill" /></li>
                    <li><TechPill tech="SCRUM" type="skill" /></li>
                    <li><TechPill tech="Bootstrap" type="skill" /></li>
                </ul>
            </div>
            <div className={styles['learning-wrapper']}>
                <h3 className={styles['skills-title']}>Currently learning</h3>
                <ul>
                    <li><TechPill tech="Express.js" type="learning" /></li>
                    <li><TechPill tech="MongoDB" type="learning" /></li>
                    <li><TechPill tech="Node" type="learning" /></li>
                    <li><TechPill tech="Flutter" type="learning" /></li>
                </ul>
            </div>
            <div className={styles['interests-wrapper']}>
                <h3 className={styles['skills-title']}>Interests</h3>
                <ul>
                    <li><TechPill tech="ASP .NET" type="interest" /></li>
                    <li><TechPill tech="Django" type="interest" /></li>
                    <li><TechPill tech="Angular" type="interest" /></li>
                    <li><TechPill tech="Azure" type="interest" /></li>
                    <li><TechPill tech="AWS" type="interest" /></li>
                    <li><TechPill tech="DevOps" type="interest" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Skills
