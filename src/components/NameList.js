import React from 'react'
import PersonList from './PersonList'

function NameList() {
    const person = [
        {
            name : "Andy",
            age : 33,
            skills : "Vue"
        },
        {
            name : "Harald",
            age : 23,
            skills : "Angular"
        },
        {
            name : "Joe",
            age : 34,
            skills : "ReactJS"
        },

    ]
    const listOfCandidateNames = person.map(candidateName => <PersonList person = {candidateName} />)
    return ( <div> {listOfCandidateNames} </div>)
}

export default NameList
