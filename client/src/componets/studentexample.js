import React, { useState } from 'react';
// Import our custom useStudentContext hook to have access to the initial state
import { useStudentContext } from '../Contextex/StudentContext';
import API from '../utils/API';
import HeatMap from '../componets/heatmap1';


export default function StudentList() {
    // Assign student related variables from our custom hook
    const { students, addStudent, removeStudent } = useStudentContext();

    // Initialize state for new students and new student majors
    const [newStudentName, setNewStudentName] = useState('');
    const [newStudentX, setNewStudentX] = useState('');
    const [newStudentY, setNewStudentY] = useState('');

    // newly added heatmap
    const [value, setValue] = useState();

    const handleSubmit = (e) => {
        console.log('clicked api')
        console.log(students);
        e.preventDefault();
        
     searchapi()
    
    
        console.log(JSON.stringify(value))
      };
    
      const searchapi = (query) =>
      API.searchOne(query)
        .then((res) => setValue(Object.values(JSON.parse(res.data.mousehover))))
  
          
       
        .catch((err) => console.log(err));
  
  
  
        function filterX() {
          console.log(value);
          for (var i = 0; i < 10; i++) {
  
            let { x, y, time } = value[i]
  
  
            console.log(x, y, time)
        
    
          }
        }

    return (
        <div>
            {students ? (
                <>
                    <section className="student-list">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>UserName</th>
                                    <th>xCor</th>
                                    <th>xCor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student) => (
                                    <tr key={student.id}>
                                        <td>{student.id}</td>
                                        <td>{student.username}</td>
                                        <td>{student.x}</td>
                                        <td>{student.y}</td>
                                        <td>
                                            <button
                                                type="button"
                                                onClick={() => removeStudent(student.id)}
                                            >
                                                <span role="img" aria-label="delete">
                                                    ✖️
                                                </span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="add-student">
                            <input
                                onChange={(e) => setNewStudentName(e.target.value)}
                                placeholder="New student name..."
                                type="text"
                                value={newStudentName}
                            />
                            <input
                                onChange={(e) => setNewStudentX(e.target.value)}
                                placeholder="New xCor..."
                                type="number"
                                value={newStudentX}
                            />

                            <input
                                onChange={(e) => setNewStudentY(e.target.value)}
                                placeholder="New yCor..."
                                type="number"
                                value={newStudentY}
                            />


    

                            <button
                                type="button"
                                onClick={() => {
                                    addStudent({ username: newStudentName, x: newStudentX, y: newStudentY});
                                    // Empty the input field and reset the dropdown after buttons is clicked
                                    setNewStudentName('');
                                    setNewStudentX('');
                                    setNewStudentY('');
                                }}
                            >
                                Add Student
                            </button>
                        </div>
                    </section>
                    <button onClick={filterX}>Filterx</button>
      <button onClick={ handleSubmit}>Search</button>
                </>
            ) : (
                <span>Hmm... seems that there are no students here!</span>
            )}
        </div>
    );
}
