import React from 'react'
import { Icon } from '@iconify/react';
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
                </div>
                <div className='socialLinksDesktop'>
                    <div>
                        <Icon className='icon' icon="logos:google-gmail" />
                        <a target={'_blank'} href="mailto:hrushikeshkaranth@gmail.com">hrushikeshkaranth@gmail.com</a>
                    </div>
                    <div>
                        <Icon className='icon' icon="logos:google-maps" />
                        <a target={'_blank'} href='https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9544595,77.4660551,46505m/data=!3m1!1e3!4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627!16zL20vMDljMTc'>Bengaluru, India</a>
                    </div>
                    <div>
                        <Icon className='icon' icon="mdi:github" style={{ color: 'white' }} />
                        <a target={'_blank'} href='https://github.com/HrushikeshKaranth'>My GitHub Profile</a>
                        <Icon className='icon2' icon="material-symbols:arrow-forward-rounded" />
                    </div>
                    <div>
                        <Icon className='icon' icon="logos:linkedin-icon" />
                        <a target={'_blank'} href='https://www.linkedin.com/in/hrushikesh-h-s-25b78018b/'>My LinkedIn Profile</a>
                        <Icon className='icon2' icon="material-symbols:arrow-forward-rounded" />
                    </div>
                </div>
            </div>
            <p className='bio'>A Creative Developer, Fast learner, Consistent worker with nearly a year
                experience 😇 in Full Stack Web Development.<br />
                A Full Stack Developer with a very good eye for Design 🎨. I have developed some exciting web applications in various domains.<br /> Buliding pixel 🔳 perfect UI with intuitive functionalities and robust backend are my core experience.</p>
            <div className='socialLinks'>
                <div>
                    <Icon className='icon' icon="logos:google-gmail" />
                    <a href="mailto:hrushikeshkaranth@gmail.com">hrushikeshkaranth@gmail.com</a>
                </div>
                <div>
                    <Icon className='icon' icon="logos:google-maps" />
                    <a href='https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9544595,77.4660551,46505m/data=!3m1!1e3!4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627!16zL20vMDljMTc'>Bengaluru, India</a>
                </div>
                <div>
                    <Icon className='icon' icon="mdi:github" style={{ color: 'white' }} />
                    <a target={'_blank'} href='https://github.com/HrushikeshKaranth'>GitHub Profile</a>
                    <Icon className='icon2' icon="material-symbols:arrow-forward-rounded" />
                </div>
                <div>
                    <Icon className='icon' icon="logos:linkedin-icon" />
                    <a target={'_blank'} href='https://www.linkedin.com/in/hrushikesh-h-s-25b78018b/'>LinkedIn Profile</a>
                    <Icon className='icon2' icon="material-symbols:arrow-forward-rounded" />
                </div>
            </div>
        </>
    )
}

export default IntroSection