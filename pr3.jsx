/*R-3) Consider the following data
 const data=[
    {
        name:"Jim", age:20, subject:"Maths"
    },
    {
        name:"Kim", age:30, subject:"Physics"
    },
    {
        name:"Rim", age:25, subject:"Chemistry"
    },
    {
        name:"Sim", age:20, subject:"Maths"
    }
]
Write a class component which keeps the above data in a state variable called students and renders the data in a tabular form. If the student’s age is exceeding 20, that row should be shown in red color.

Objectives/features to use: Class components, state, use of map function, ternary conditional operator.*/

import React from "react";

class StudentData extends React.Component{
    constructor(){
        super()
        this.state = { 
            students: [
                {name:"Jim", age:20, subject:"Maths"},
                {name:"Kim", age:30, subject:"Physics"},
                {name:"Rim", age:25, subject:"Chemistry"},
                {name:"Sim", age:21, subject:"Maths"}
            ]
        }
    }

    render(){
        // let h1 = <h1>Hii</h1>
        const header = Object.keys(this.state.students[0])
        return(
            <>
            <h1>Students Data </h1>
            <table>
                    <thead>
                        <tr>
                        {
                            header.map((key, index) => {
                                return <th key= {index} >{key}</th>
                             })
                        }
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.students.map((student, ind) =>{
                                return <tr key={ind} style = {student.age >20?{backgroundColor: 'red'}: {}}>
                                    <td>{student.name}</td> 
                                    <td>{student.age}</td> 
                                    <td>{student.subject}</td> 
                                </tr>
                            })
                        }
                    </tbody>
            </table>
            </>
        )
    }
}


export default StudentData;















