import React from 'react'
import { Icon } from '@iconify/react';
import SocialLinks from './subComponents/SocialLinks';
function IntroSection() {
    return (
        <>
            <div className='nameAndPhoto'>
                <div className='profilePhoto'>
                    <div></div>
                </div>
                <div className='nameAndJobDesc'>
                    <div className='myName'>HRUSHIKESH H S</div>
                    <div className="jobProfile">Full Stack Developer</div>
                    {/* <div className='resumeDownloadButtom'>
                        <a target={'_blank'} href="https://drive.google.com/open?id=1zHioH76rAoqzCZTRJOjzJGzVftOdnaa-&authuser=hrushikeshkaranth%40gmail.com&usp=drive_fs">
                            <Icon icon="material-symbols:arrow-downward-rounded" />
                        </a>
                    </div> */}
                </div>
                <div className='socialLinksDesktop'>
                    <SocialLinks />
                </div>
            </div>
            <p className='bio'>
                - A Creative Developer, Fast learner, Consistent worker with nearly a year
                experience 😇 in Full Stack Development.<br />
                - A Full Stack Developer with a very good eye for Design 🎨. I have developed some exciting applications in various domains.<br />
                - Building pixel 🔳 perfect UI with intuitive functionalities and robust backend are my core experience.</p>
            <div className='socialLinks'>
                <SocialLinks />
            </div>
        </>
    )
}

export default IntroSection