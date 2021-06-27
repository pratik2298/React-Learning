import React, {useState} from 'react'

function HooksObject() {
    const [name, setName] = useState({fname: '', lname: ''})
    return (
        <div>
          <form>
            <input type="name" 
                    value = {name.fname} 
                    onChange={ e => setName({ ...name, fname: e.target.value })}
            />
            <input type="name" 
                    value = {name.lname} 
                    onChange={ e => setName({ ...name, lname: e.target.value })}
            />
            <h2> Your firstName: {name.fname}</h2>
            <h2> Your lastName: {name.lname}</h2>
          </form>
        </div>
    )
}

export default HooksObject

