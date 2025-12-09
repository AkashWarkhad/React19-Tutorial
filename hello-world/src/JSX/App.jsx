import "../App.css";
import { ButtonWithArrowAndSimpleFunction } from "./ArrowAndSimpleFunc.jsx";
import { WithJSX, WithoutJSX } from "./WithAndWithoutJSX.jsx";
import { Rule1ReturnSingleRootElementFromComponent } from "./Rule1.jsx";
import { Rule2AllTagsMustBeProperlyClosed } from "./Rule2.jsx";
import { Rule3AttMustBeWrittenInCamelCase } from "./Rule3.jsx";
import { Rule4EmbedJSExpressionInJSXUsingCurlyBraces } from "./Rule4.jsx";
import { PropsInMethod } from "./Props.jsx";
import { DefaultPropsPattern } from "./DefaultPropsPattern.jsx";
import { SpreadPropsPattern } from "./SpreadPropsPattern.jsx";

function App() {
  return (
    <div>
      <h1>React World</h1>
      <ButtonWithArrowAndSimpleFunction />
      
      <WithJSX />
      <WithoutJSX />

      <Rule1ReturnSingleRootElementFromComponent />
      <Rule2AllTagsMustBeProperlyClosed />
      <Rule3AttMustBeWrittenInCamelCase />
      <Rule4EmbedJSExpressionInJSXUsingCurlyBraces />

      <PropsInMethod
        title="Gamming Laptop" // String uses "" & others uses {}.
        price={50000}
        inStock={true}
        categories={["Electronis", "Computer", "Gamming"]}
      />
      
      <DefaultPropsPattern
        //name="Akash" // Default value 'Guest' will be used.
        message = "how are you?"
      />

      <SpreadPropsPattern 
        id = "ABC"
        name = "James"
        message = "Welcome to Goa hotel!"
      />
      
    </div>
  );
}

export default App;
