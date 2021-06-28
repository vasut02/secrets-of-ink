import React from 'react'
import {Link} from 'react-router-dom'
import { Document, Page } from "react-pdf";

const Pdf = (props) => {

    
    const onDocumentLoadSuccess = ({ numPages }) => {
        console.log(numPages);
    };

    return (
        <div className='document' >
            <Link to={{pathname:'/pdf' , state:props.pdf}} >
                <Document
                    
                    file={props.pdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page height='100' pageNumber={1} width={300} />
                </Document>
            </Link>
        </div>
    )
}

export default Pdf
