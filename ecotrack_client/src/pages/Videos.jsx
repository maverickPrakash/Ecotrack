import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Videos.css'; 

export default function Videos() {
  return (
    <>
    <div className='videoClass'>
    <h3 className='shortText'>Shorts</h3>
    <h3 className='longText' >Long Videos</h3>
    </div>
    <div className='shortVideoConatiner'>
        <div className='shortVideoframe'>
            
            <iframe width="426" height="600" src="https://www.youtube.com/embed/o_hTTOmfh_w" title="What is Carbon Footprint? 🌎 🦶🏿" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h3>What is Carbon Footprint?</h3>
        </div>
        <div className='shortVideoframe'>
            <iframe width="426" height="600" src="https://www.youtube.com/embed/q2b-qBeotvE" title="What is Carbon footprint 👣?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>    
        <div className='shortVideoframe'>
            <iframe width="426" height="600" src="https://www.youtube.com/embed/REcPMBtBjxk" title="These 5 easy changes can cut your carbon footprint" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='shortVideoframe'>
            <iframe width="426" height="600" src="https://www.youtube.com/embed/q2b-qBeotvE" title="What is Carbon footprint 👣?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>    
        <div className='shortVideoframe'>

            <iframe width="426" height="600" src="https://www.youtube.com/embed/REcPMBtBjxk" title="These 5 easy changes can cut your carbon footprint" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            
        </div>
        <div className='shortVideoframe'>
            <iframe width="426" height="600" src="https://www.youtube.com/embed/q2b-qBeotvE" title="What is Carbon footprint 👣?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>    
        <div className='shortVideoframe'>

            <iframe width="426" height="600" src="https://www.youtube.com/embed/REcPMBtBjxk" title="These 5 easy changes can cut your carbon footprint" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>

    
    </>
  )
}
