import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import workdata from './data/data.json'

function Education() {
    const [data, setData] = useState(workdata.education)
    const [showEducation, setshowEducation] = useState(false)
    const [showDesc, setShowDesc] = useState(false)
    console.log(data);
  return (
    <>
      <div className='headerEducation' onClick={() => { setshowEducation(!showEducation) }}>
        <span>EDUCATION</span>
        {
          showEducation ?
            <Icon className='icon' icon="material-symbols:keyboard-arrow-down-rounded" />
            :
            <Icon className='icon' icon="material-symbols:keyboard-arrow-up-rounded" />
        }
      </div>
      <div className='companies' style={showEducation ? { display: 'flex' } : { display: 'none' }}>
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
                        {data.linkedin &&<a target={'_blank'} href={data.linkedin}><Icon className='icon' icon="logos:linkedin-icon" /></a>}
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
                    <span className='toYear'>{data.to}</span>
                  </div>
                  <div className='jobTitle'>{data.jobTitle}</div>
                  <div className='description'>
                    <span className='hide'>Academic Details:</span>
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
                  {data.website && <div className='websiteUrl'>
                    <a target={'_blank'} href={data.website}><Icon className='icon breath' icon="material-symbols:arrow-forward-rounded" /></a>
                  </div>}
                </div>
              )
            })}
        </>
      </div>
    </>
  )
}

export default Education