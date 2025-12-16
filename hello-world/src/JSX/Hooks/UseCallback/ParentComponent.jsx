import React , {useState, useCallback} from 'react'
import Title from './Title';
import Button from './Button';
import Count from './Count';

// useCallback helps React reuse the same function between renders when passing 
// callbacks to memoized components.

function ParentComponent() 
{
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000)
  
    const IncreaseAge = useCallback(() => 
    {
        setAge(age + 1);
    }, [age]); // Dependecy control over the function

    const IncreaseSalary = useCallback(() => 
    {
        setSalary(salary + 1000);
    }, [salary]);

    return (
        <div>
            <Title />
            <Count text= "Age" count ={age}/>
            <Button handleClick ={ IncreaseAge }>Increase Age</Button>

            <Count text= "Salary" count ={salary}/>
            <Button handleClick= {IncreaseSalary}>Increase Salary</Button>
        </div>
    )
}

export default ParentComponent