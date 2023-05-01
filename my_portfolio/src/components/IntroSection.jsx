import React from 'react'
import { Icon } from '@iconify/react';
function IntroSection() {
    return (
        <>
            <div className='introMiddle'>
                <div></div>
            </div>
            <div className='introLeftSide'>
                <div className='myName'>HRUSHIKESH H S</div>
                <div className="jobProfile">Web Developer</div>
                <p className='bio'>A Creative Developer, Fast learner, Consistent worker with nearly a year
                    experience 😇 in Full Stack Web Development.</p>
            </div>
            <div className='introRightSide'>
                <div>
                    <Icon className='icon' icon="logos:google-gmail" />
                    <span>hrushikeshkaranth@gmail.com</span>
                </div>
                <div>
                    <Icon className='icon' icon="logos:google-maps" />
                    <span>Bengaluru, India</span>
                </div>
                <div>
                    <Icon className='icon' icon="mdi:github" style={{color:'white'}}/>
                    <a target={'_blank'} href='https://github.com/HrushikeshKaranth'>My GitHub Profile</a>
                </div>
                <div>
                    <Icon className='icon' icon="logos:linkedin-icon" />
                    <a target={'_blank'} href='https://www.linkedin.com/in/hrushikesh-h-s-25b78018b/'>My LinkedIn Profile</a>
                </div>
            </div>
        </>
    )
}

export default IntroSection