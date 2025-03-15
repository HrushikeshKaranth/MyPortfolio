import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import workdata from './data/data.json'

function Projects() {
    let item = useRef()
    const [data, setData] = useState(workdata.projects)
    // console.log(data);
    const [showProjects, setShowProjects] = useState(true)
    useEffect(() => {
        try {
            showProjects ? item.current.style = 'transform:rotate(-180deg)' : item.current.style = 'transform:rotate(0deg)'
        } catch (error) { }
    }, [showProjects])
    // const [showDesc, setShowDesc] = useState(false)
    return (
        <>
            <div className='headerProject'>
                <span><b className='projName'>PROJECTS</b></span>
            </div>
            <div className='proj' >
                <>
                    {
                        data.map((data) => {
                            return (
                                <div className='project' key={data.id}>
                                    <div className='ProjectName'>
                                        <div className='projectLogo'>
                                            <Icon style={{ width: '30px', height: '30px' }} className='skillIcon' icon="skill-icons:github-light" />
                                            {/* <div className='jobTitle'>{data.name}</div> */}
                                            <a target={'_blank'} href={data.link}><div className='projectTitle'><u>{data.name}</u> </div></a>
                                        </div>
                                        {/* <div className='projectNameAndLink'>
                                            <br />
                                            <div className='projectDescription'>
                                                <p style={{ color: 'white' }}>- {data.description}{' '} </p>
                                            </div>
                                        </div> */}
                                    </div>
                                    {/* {data.link && <div className='websiteUrl'>
                                        <a target={'_blank'} href={data.link}><Icon className='icon breath' icon="material-symbols:arrow-forward-rounded" /></a>
                                    </div>} */}
                                    {/* <div className='screenshot hide'>
                                        <img src={require(`../images/${data.screenshot}`)} alt="" />
                                    </div> */}
                                    {/* <div className='description'>
                                        <span className='hide'>Tasks/Responsibilities:</span>
                                        <ul className='hide'>
                                            {
                                                data.notes.map((list, i) => {
                                                    return (
                                                        <li className='hide' key={i}>{list}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div> */}
                                </div>
                            )
                        })}
                </>
            </div>
        </>
    )
}

export default Projects