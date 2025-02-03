    import React from "react"
    import './des.css'
    function Sut(){
        return (
            <>
                <h2>Haytam</h2>
                <span className="level">entry Level Developer, Morocco</span>
            </>
        )
    }
    function Skills(){
        const Skill = [
            "Html",
            "Css",
            "Js",
            "React",
            "java",
            "spring boot"
        ]
    const listOfSkills = Skill.map((skill, index) => <li key={index} ><span className="list">{skill}</span></li>)
        return (
        <>
            <div className="Skill-title">SKILLS</div>
            <ul> 
            {listOfSkills}
            </ul>

        </>
        );
    }
    function Footer(){
        return (
            <footer>
            joined on Jan 30,2025
        </footer>
        );
    }
export {Sut,Footer};
export default Skills;