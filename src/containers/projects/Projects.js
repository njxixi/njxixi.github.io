import React, {useContext} from "react";
import "./Project.css";
//import ProjectCard from "../../components/projectCard/ProjectCard"
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import TempCard from "../../components/tempCard/TempCard";

export default function Projects() {
    const {isDark} = useContext(StyleContext)
    if(bigProjects.viewProjects){
        return (
            <div id="project">
                <Fade bottom duration={1000} distance="20px">
                <div className="project-container" id="project">
                    <div>
                        <h1 className="project-heading" align="center">Projects</h1>
                        <div className="project-cards-div">
                        {bigProjects.projects.map((card) => {
                            return (
                                <TempCard
                                    isDark={isDark}
                                    cardInfo={{
                                        projectName: card.company,
                                        date: card.role,
                                        descBullets: card.descBullets
                                    }}
                                />
                            );
                        })}
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        );
    }
    return null;
}
