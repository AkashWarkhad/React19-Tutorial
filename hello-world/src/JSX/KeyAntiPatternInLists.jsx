export const KeyAntiPatternLists = () => {
  const names = ["Akash", "Shubham", "Rushikesh", "Abhishek"];

  //Use key as value from the list
  //const nameElements = names.map((x) => <span key={x}> {x}, </span>);

  //Use index as key from the Map(ele, index)
  const nameElements = names.map((x, index)=> <span key={index}> {x} </span>)
  
  return <div>NameList: {nameElements}</div>;
};
