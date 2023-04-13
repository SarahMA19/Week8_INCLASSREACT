import { useEffect, useState } from "react";

const Home = props => {
    // let x = 'Friction plate';
    // console.log(x)
    // x = 'thrust bearing';
    /* componet state  is basically a collection of data/objects/functions associated with the LIFECYLE of that component
    - noticed the useSomething somewhere ---- thats a hook
    - useState(), useEffect(), useContext() .... these may ne the most common BUT there are a bunch of others
    andwe can make our own custom hooks.
    - hooks provide special behavoir that influence a components lifecycle
    */

    let [animal, setAnimal] = useState('Black Bear'); //initial value
    // why state? Because every time state is MUTATED the component will
    // reload/render/update
    // const changeAnimal = () => {
    //     console.log('BUTTON CLICKED'); // this is the WRONG WAY - doesn't work
    //     animal = 'Tigar';
    // }

    /* in order to properly mutate state:
    - we have to make a copy
    - change the copy
    - set the state to that copy; specifically using the setter!
    */

    const changeAnimal = () => {
        if (animal === 'Black Bear'){
            setAnimal('Tigar');
        } else {
            setAnimal('Black Bear');
        };
    }

    const changeTeacherOrder = () => {
        // 1. grab state and make a copy
        let teachercopy = [...props.teachers]; //what is this? JS spread operator
        // 2. modify that copy
        let popped = teachercopy.pop();
        teachercopy.splice(0,0, popped);
        // 3. OPTIONAL step: test/verify
        console.log(props.teachers);
        //4. utate state with the setter (which will cause a re-render)
        props.setTeachers(teachercopy);

    }


    useEffect(() => {console.log('The Home componet has rendered (or re-rendered)')});
    return(
        <>
        <div>
            <h1>THIS WILL BE HOMEPAGE</h1>
            <h3>{animal}</h3>
            {/* <h3>{x}</h3> */}
            <button className="btn btn-warning" onClick={changeAnimal}>Change Animal</button>
        </div>
        <div>
            <h2>Our Teachers:</h2>
            <button className="btn btn-warning" onClick={changeTeacherOrder}>Change Teacher order</button>
            {props.teachers.map((teacher, index) => {
                return<h3 key={index}>{teacher}</h3>
            })}
        </div>
        </>
    );
}


export default Home;