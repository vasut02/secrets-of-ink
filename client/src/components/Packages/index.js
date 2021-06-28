import React from 'react'
import Pdf from 'components/Packages/Pdf'
import soloPDF from '../../pdf/packages/SecertsOfInk(SOLOPACKAGE)(1).pdf'
import paidPDF from '../../pdf/packages/SOIPAIDPACKAGES.pdf'
import './style.css'

const App = () => {

    return (
        <div style={{marginTop:'110px'}} className='text-center'>
            <div className='container'>
                <div className='section-title'>
                    <h2>Packages</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                        dapibus leonec.
                    </p>
                </div>

                <div className='pdf'>
                    <Pdf pdf={soloPDF} />
                    <Pdf pdf={paidPDF} />
                </div>
            </div>
        </div>
    )
}

export default App
