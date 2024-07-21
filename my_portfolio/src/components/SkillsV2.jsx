import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import workdata from './data/data.json'

function SkillsV2() {
    let item = useRef()
    const [data, setData] = useState(workdata.skillsv2)
    const [showSkills, setShowSkills] = useState(true)
    useEffect(() => {
        try {
            showSkills ? item.current.style = 'transform:rotate(-180deg)' : item.current.style = 'transform:rotate(0deg)'
        } catch (error) { }
    }, [showSkills])
    return (
        <>
            <div className='headerSkills' onClick={() => { setShowSkills(!showSkills) }}>
                <span><b>SKILLS</b></span>
                {/* <Icon className='icon' ref={item} icon="material-symbols:keyboard-arrow-down-rounded" /> */}
            </div>
            <br />
            <div className='skillsMain'>
                <div className='skillsCard'>
                    <span><b>Operating Systems:</b></span>
                    <div className='skillSection'>
                        {
                            data[0].OS.map((data) => {
                                return (
                                    <div className='skill' key={data.id}>
                                        {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                        <span>{data.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* <br /> */}
                {/* <div className="skillsCard">
                    <span><b>Programming Languages:</b></span>
                    <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                        {
                            data[0].languages.map((data) => {
                                return (
                                    <div className='skill' key={data.id}>
                                        {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                        <span>{data.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div> */}
                {/* <br /> */}
                {/* <div className="skillsCard">
                    <span><b>Frameworks/Libraries:</b></span>
                    <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                        {
                            data[0].frameworks.map((data) => {
                                return (
                                    <div className='skill' key={data.id}>
                                        {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                        <span>{data.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div> */}
                {/* <br /> */}
                <div className='skillsCard'>
                    <span><b>Cloud Services:</b></span>
                    <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                        {
                            data[0].cloudService.map((data) => {
                                return (
                                    <div className='skill' key={data.id}>
                                        {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                        <span>{data.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='skillsCard'>
                    <span><b>SCM / Version Control:</b></span>
                    <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                        {
                            data[0].scmvc.map((data) => {
                                return (
                                    <div className='skill' key={data.id}>
                                        {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                        <span>{data.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* <br /> */}
                <div className='skillsCard'>
                    <span><b>Continuous Integration Tools:</b></span>
                    <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                        {
                            data[0].cicd.map((data) => {
                                return (
                                    <div className='skill' key={data.id}>
                                        {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                        <span>{data.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* <br /> */}
                <div className='skillsCard'>
                    <span><b>Containerization and Orchestration:</b></span>
                    <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                        {
                            data[0].containerization.map((data) => {
                                return (
                                    <div className='skill' key={data.id}>
                                        {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                        <span>{data.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* <br /> */}
                <div className='skillsCard'>
                    <span><b>Automation / Infrastructure as a Code:</b></span>
                    <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                        {
                            data[0].iaas.map((data) => {
                                return (
                                    <div className='skill' key={data.id}>
                                        {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                        <span>{data.name}</span>
                                    </div>
                                )
                            })
                            
                        }
                    </div>
                </div>
                {/* <br /> */}
                <div className='skillsCard'>
                    <span><b>Monitoring:</b></span>
                    <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                        {
                            data[0].monitoring.map((data) => {
                                return (
                                    <div className='skill' key={data.id}>
                                        {data.icon ? <Icon className='skillIcon' icon={data.icon} /> :
                                            <img className='skillIcon' src={require(`../images/${data.logo}`)} alt={data.logo} />
                                            // <Icon className='skillIcon' icon="ph:wifi-none-thin" />
                                        }
                                        <span>{data.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='skillsCard'>
                    <span><b>Servers:</b></span>
                    <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                        {
                            data[0].servers.map((data) => {
                                return (
                                    <div className='skill' key={data.id}>
                                        {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                        <span>{data.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* <br /> */}
                <div className='skillsCard'>
                    <span><b>Build Tools:</b></span>
                    <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                        {
                            data[0].buildTools.map((data) => {
                                return (
                                    <div className='skill' key={data.id}>
                                        {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                        <span>{data.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='skillsCard'>
                    <span><b>Bug Tracking Tools:</b></span>
                    <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                        {
                            data[0].bugTracking.map((data) => {
                                return (
                                    <div className='skill' key={data.id}>
                                        {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                        <span>{data.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* <br /> */}
                {/* <div className='skillsCard'>
                    <span><b>Cloud Services:</b></span>
                    <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                        {
                            data[0].cloudService.map((data) => {
                                return (
                                    <div className='skill' key={data.id}>
                                        {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                        <span>{data.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div> */}
                {/* <br /> */}
                {/* <br /> */}
                {/* <div className='skillsCard'>
                    <span><b>Configuration Management Tools:</b></span>
                    <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                        {
                            data[0].automation.map((data) => {
                                return (
                                    <div className='skill' key={data.id}>
                                        {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                        <span>{data.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div> */}
                {/* <br /> */}
                {/* <div className='skillsCard'>
                    <span><b>Databases:</b></span>
                    <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                        {
                            data[0].db.map((data) => {
                                return (
                                    <div className='skill' key={data.id}>
                                        {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                        <span>{data.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div> */}
                {/* <br /> */}
                {/* <br /> */}
                
            </div>
        </>
    )
}

export default SkillsV2