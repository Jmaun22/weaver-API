import React, {useState, useContext} from 'react'

import { GlobalContext } from '../Context/GlobalState';

function AddUserDataComp() {



    const [x, setx] = useState(0);
    const [y, sety] = useState(0);
    const [username, setUsername] = useState('jess');


    const {addUserData} = useContext(GlobalContext);


    
    const onSubmit = e => {
        e.preventDefault();
        console.log('click')

        const newUser = {
            username,
            x,
            y,
        
        }
        console.log(newUser)

        addUserData(newUser);
    }

    return (
        <>
        <h3> Add new user data</h3>
        <form>
            <div className="form-control">
                <label htmlFor="text">Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter text..." />
        
            </div>
            <div className="form-control">
                <label htmlFor="amount">Xcor</label>
                <input type="number" value={x} onChange={(e) => setx(Number(e.target.value))}
                placeholder="Enter amount...."/>
            </div>
            <div className="form-control">
                <label htmlFor="amount">Ycor</label>
                <input type="number" value={y} onChange={(e) => sety(Number(e.target.value))}
                placeholder="Enter amount...."/>
            </div>
            <button onClick={onSubmit}>addUserData</button>
    
        </form>


        </>
    )
}

export default AddUserDataComp