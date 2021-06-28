import React from 'react'

const pdfRender = (props) => {
    
    const pdf = props.location.state

    return (
        <div style={{ height: '100vh', width: '100vw' }}  >
            <object data={pdf} title='pdf' type="application/pdf" width="100%" height="100%">
                <iframe src={pdf} width="100%" title="PDF" height="100%" style={{ border: 'none' }}>
                    This browser does not support PDFs. Please download the PDF to view it:
                    &lt;a href="../pdf/sample-3pp.pdf"&gt;Download PDF&lt;/a&gt;
                </iframe>
            </object>

        </div>
    )
}

export default pdfRender