import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import workdata from './data/data.json'

function WorkExperience() {
  const [data, setData] = useState(workdata.data)
  const [showWorkExperience, setShowWorkExperience] = useState(false)
  const [showDesc, setShowDesc] = useState(false)
  return (
    <>
      <div className='header' onClick={() => { setShowWorkExperience(!showWorkExperience) }}>
        <span>WORK EXPERIENCE</span>
        {
          showWorkExperience ?
            <Icon className='icon' icon="material-symbols:keyboard-arrow-down-rounded" />
            :
            <Icon className='icon' icon="material-symbols:keyboard-arrow-up-rounded" />
        }
      </div>
      <div className='companies' style={showWorkExperience ? { display: 'flex' } : { display: 'none' }}>
        <>
          {
            data.map((data) => {
              return (
                <div className='company' key={data.id}>
                  <div className='companyName'>
                    <div className='companyLogo'><img src={data.logo} alt={data.companyName} /></div>
                    <>
                      <span className='nameAndLinkedin'>
                        <span>{data.companyName}</span>
                        <a target={'_blank'} href={data.linkedin}><Icon className='icon' icon="logos:linkedin-icon" /></a>
                      </span>
                      <div>
                        <a target={'_blank'} href={data.locationUrl}>
                          - {data.address}
                          <Icon className='icon locicon' icon="material-symbols:location-on-outline-rounded" />
                        </a>
                      </div>
                    </>
                  </div>
                  <div className='fromAndTo'
                    style={data.to == 'Present' ? { color: '#34a853' } : { color: '#f36b5f' }}>
                    <span className='fromYear'>{data.from}</span>
                    {' - '}
                    <span className='toYear'>{data.to} ({data.workTime})</span>
                  </div>
                  <div className='jobTitle'>{data.jobTitle}</div>
                  <div className='description'>
                    <span className='hide'>Tasks/Responsibilities:</span>
                    <ul className='hide'>
                      {
                        data.tasks.map((list, i) => {
                          return (
                            <li className='hide' key={i}>{list}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                  <div className='websiteUrl'>
                    <a target={'_blank'} href={data.website}><Icon className='icon breath' icon="material-symbols:arrow-forward-rounded" /></a>
                  </div>
                </div>
              )
            })}
        </>
      </div>
    </>
  )
}

export default WorkExperience