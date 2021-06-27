import React from 'react'

function FragmentDemo() {
    return (

        // without fragment it provide extra div tag inside div class="App"
        // <div>
        //    <h1> Fragment Demo  </h1> 
        //     <p>This is a Paragraph</p>
        // </div>

        // React Fragment
        <>
            <h1> Fragment Demo  </h1> 
            <p>This is a Paragraph</p>
        </>
    )
}

export default FragmentDemo;
