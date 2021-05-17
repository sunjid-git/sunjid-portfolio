import React from 'react';
import './Skills.css';

import html from '../../images/skills/html.svg';
import css from '../../images/skills/css.svg';
import bs from '../../images/skills/bs.svg';
import node from '../../images/skills/node.svg';
import fb from '../../images/skills/fb.svg';
import git from '../../images/skills/git.svg';
import js from '../../images/skills/js.svg';
import mongodb from '../../images/skills/mongodb.svg';
import npm from '../../images/skills/npm.svg';
import react from '../../images/skills/react.svg';
import vscode from '../../images/skills/vscode.svg';


const Skills = () => {
    return (
        <div className="container text-white">
            <h1 className="text-center text-success font-weight-bolder pt-5">Tech Stack</h1>
            <div className="row  d-flex justify-content-around align-items-center m-5">

                <div className="col-md-2 ">
                    <div className="row skillSection ">
                        <img className="skillImg" src={html} alt=""/>
                    </div>
                </div>

                <div className="col-md-2">
                    <div className="row skillSection">
                    <img className="skillImg" src={css} alt=""/>
                    </div>
                    <div className="row skillSection">
                    <img className="skillImg" src={bs} alt=""/>
                    </div>
                </div>

                <div className="col-md-2">
                    <div className="row skillSection">
                    <img className="skillImg" src={js} alt=""/>
                    </div>
                    <div className="row skillSection">
                    <img className="skillImg" src={vscode} alt=""/>
                    </div>
                    <div className="row skillSection">
                    <img className="skillImg" src={git} alt=""/>
                    </div>
                </div>

                <div className="col-md-2">
                    <div className="row skillSection">
                    <img className="skillImg" src={react} alt=""/>
                    </div>
                    <div className="row skillSection">
                    <img className="skillImg" src={mongodb} alt=""/>
                    </div>
                </div>

                <div className="col-md-2 ">
                    <div className="row skillSection">
                    <img className="skillImg" src={node} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;