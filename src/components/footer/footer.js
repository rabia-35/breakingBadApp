import React from 'react'

function Footer() {
  return (
   
        <div className="fixed">
            Developed by <strong>Rabia Ölker</strong>
            <div>
                Github {">> "}
                <a  href='https://github.com/rabia-35/breakingBadApp' rel="noreferrer" target="_blank">
                    @rabia-35
                </a>
            </div>
        </div>
    )
} 

export default React.memo(Footer)