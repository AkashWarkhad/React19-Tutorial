// Every component must return a single root element.

export const Rule1ReturnSingleRootElementFromComponent = () => {
  return (
    <>
      <b>What is Rule 1</b>
      <p>
        We can't return multiple root element from component, We must needs to
        wrap multiple elements into one component. - To do that React provide us
        this React.Fragment element to wrap the multiple elements. - We can also
        use like empty angular brackets <> </>
      </p>
    </>
  );
};
