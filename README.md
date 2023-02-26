React assignments solved 

<!-- import React, { Component } from 'react';

class StudentTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          name: "Jim",
          age: 20,
          subject: "Maths"
        },
        {
          name: "Kim",
          age: 30,
          subject: "Physics"
        },
        {
          name: "Rim",
          age: 25,
          subject: "Chemistry"
        },
        {
          name: "Sim",
          age: 20,
          subject: "Maths"
        }
      ]
    };
  }

  render() {
    const header = Object.keys(this.state.students[0]);
    return (
      <table>
        <thead>
          <tr>
            {header.map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.state.students.map(student => (
            <tr key={student.name} style={student.age > 20 ? { backgroundColor: 'red' } : {}}>
              {header.map((key, index) => (
                <td key={index}>{student[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default StudentTable; -->



 <!-- <tbody>
          {this.state.students.map(student => (
            <tr key={student.name} style={student.age > 20 ? { backgroundColor: 'red' } : {}}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.subject}</td>
            </tr>
          ))}
        </tbody> -->