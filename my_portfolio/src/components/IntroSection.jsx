import React from 'react'
import { Icon } from '@iconify/react';
function IntroSection() {
    return (
        <>
            <div className='introLeftSide'>
                <div className='myName'>HRUSHIKESH H S</div>
                <div className='jobProfile'>Web Developer</div>
                <p className='bio'>A Creative Developer, Fast learner, Consistent worker 😇 with nearly a year
                    experience in Full Stack Web Development.</p>
            </div>
            <div className='introMiddle'>
            </div>
            <div className='introRightSide'>
                <div>
                    <span>hrushikeshkaranth@gmail.com</span>
                    <Icon className='icon' icon="mdi:email-outline" />
                </div>
                <div>
                    <span>Bengaluru, India</span><Icon className='icon' icon="mdi:location-outline" />
                </div>
                <div>
                    <a target={'_blank'} href='https://github.com/HrushikeshKaranth'>My GitHub</a>
                    <Icon className='icon' icon="mdi:github" />
                </div>
                <div>
                    <a target={'_blank'} href='https://www.linkedin.com/in/hrushikesh-h-s-25b78018b/'>My LinkedIn Profile</a>
                    <Icon className='icon' icon="mdi:linkedin" />
                </div>
            </div>
        </>
    )
}

export default IntroSection