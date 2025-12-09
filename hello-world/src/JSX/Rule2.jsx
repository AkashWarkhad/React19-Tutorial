// Rule 2 : Every single tag must be properly closed eg X <br> <br />

export const Rule2AllTagsMustBeProperlyClosed = () => 
{
    return (
        <form>
            <input type="text" placeholder="Enter Name"></input>
            <br />
            <input type="email" placeholder="Enter Email Address"></input>
            <br /> <br />
        </form>
    );
}