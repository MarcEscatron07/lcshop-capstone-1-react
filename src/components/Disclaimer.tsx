import React from 'react';

import Template from './layout/Template';

function Disclaimer() {
    return (
        <>
            <Template>
                <div className="row">
                    <div className="col p-5 bg-dark text-white text-justify">
                        <div className="d-flex flex-column mx-auto w-75">
                            <h1>Disclaimer</h1>

                            <p>Last updated: November 10, 2019</p>

                            <p>The information contained on www.lcshop.com website (the "Service") is for educational
                                purposes only, including images used within the site.</p>

                            <p>LCShop assumes no responsibility for errors or omissions in the contents on the Service.
                            </p>

                            <p>In no event shall LCShop be liable for any special, direct, indirect, consequential, or
                                incidental
                                damages or any damages whatsoever, whether in an action of contract, negligence or other
                                tort,
                                arising out of or in connection with the use of the Service or the contents of the
                                Service. LCShop
                                reserves the right to make additions, deletions, or modification to the contents on the
                                Service at
                                any time without prior notice. This Disclaimer for LCShop has been created with the help
                                of <a href="https://www.termsfeed.com/disclaimer-generator/" target="_blank" rel="noopener noreferrer">Disclaimer
                                    Generator</a>.
                            </p>

                            <p>LCShop does not warrant that the website is free of viruses or other harmful components.
                            </p>

                            <h2>External links disclaimer</h2>

                            <p>The site may contain links to external websites that are not provided or
                                maintained by
                                or in any way affiliated with LCShop.</p>

                            <p>Please note that the LCShop does not guarantee the accuracy, relevance, timeliness, or
                                completeness
                                of any information on these external websites.</p>
                        </div>
                    </div>
                </div>
            </Template>
        </>
    )
}

export default Disclaimer;