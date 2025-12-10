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
import { WrapJsxPropsPattern } from "./WrapJsxPropsPattern.jsx";
import { ConditionalRendering } from "./conditionalRendering.jsx";
import { ListRendering } from "./ListRendering.jsx";
import { KeyAntiPatternLists } from "./KeyAntiPatternInLists.jsx";
import { InlineStyleJSX } from "./Styles/InlineStyle.jsx";
import { ExternalStyleJSX } from "./Styles/ExternalStyle.jsx";
import { ModuleStyle } from "./Styles/ModuleStyle.jsx";
import { EventHandling } from "./EventHandling.jsx";
import { SubscribeEvent } from "./EventHandlerExample/SubsribeEvent.jsx";
import { ContactUsEvent } from "./EventHandlerExample/ContactUsEvent.jsx";

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
        message="how are you?"
      />

      <SpreadPropsPattern
        id="ABC"
        name="James"
        message="Welcome to Goa hotel!"
      />

      <WrapJsxPropsPattern title="User Profile">
        <p>Name</p>
        <p>name.lastname@gmail.com</p>
        <button>Edit Profile</button>
      </WrapJsxPropsPattern>

      <ConditionalRendering
        name="Akash"
        isOnline={true}
        hideOffline={false}
        isPremium={true}
        isNewUser={false}
        role="Admin"
      />

      <ConditionalRendering
        name="Rushi"
        isOnline={false}
        hideOffline={false}
        isPremium={true}
        isNewUser={true}
        role="VIP"
      />

      <ListRendering />

      <KeyAntiPatternLists />

      <InlineStyleJSX>Internal CSS style changes has been saved</InlineStyleJSX>
      <InlineStyleJSX statusCode="500">
        Internal CSS style failed went wrong!
      </InlineStyleJSX>

      <ExternalStyleJSX status="pass">
        External style CSS Applied
      </ExternalStyleJSX>
      <ExternalStyleJSX status="fail">
        External style CSS Failed to Apply
      </ExternalStyleJSX>

      <ModuleStyle status="pass">Using Module style CSS</ModuleStyle>

      <EventHandling text="Press" />

      <SubscribeEvent />
      <ContactUsEvent />
    </div>
  );
}

export default App;
