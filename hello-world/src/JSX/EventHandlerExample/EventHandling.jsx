export const EventHandling = ({text = "Thanks for"}) => 
{
  const HandleClick = (evt) => {
    console.log("Event clicked", evt.target);
    console.log("click Coordinated:", evt.clientX, evt.clientY);
    console.log("WHich mouse button:", evt.button);
    console.log("Text passed:", text);
  };

  return <button onClick={HandleClick}>{text} Like</button>;
};
