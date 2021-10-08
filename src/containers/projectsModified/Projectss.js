import React, {useContext} from "react";
import "./Projectss.css";
import TempCard from "../../components/tempCard/TempCard";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Projectss() {
    const {isDark} = useContext(StyleContext)
    if(bigProjects.viewProjects){
        return (
            <div id="experience">
                <Fade bottom duration={1000} distance="20px">
                <div className="experience-container" id="workExperience">
                    <div>
                        <h1 className="experience-heading">Projects</h1>
                        <div className="experience-cards-div">
                        {bigProjects.projects.map((card) => {
                            return (
                                <TempCard
                                    isDark={isDark}
                                    cardInfo={{
                                        projectName: card.company,
                                        // desc: "",
                                        date: card.role,
                                        // companylogo: card.companylogo,
                                        // role: "",
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
