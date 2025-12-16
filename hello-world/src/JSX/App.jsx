import React from 'react'
import "../App.css";
import { ButtonWithArrowAndSimpleFunction } from "./ArrowAndSimpleFunc.jsx";
import { WithJSX, WithoutJSX } from "./WithAndWithoutJSX.jsx";
import { Rule1ReturnSingleRootElementFromComponent } from "./JSXRule/Rule1.jsx";
import { Rule2AllTagsMustBeProperlyClosed } from "./JSXRule/Rule2.jsx";
import { Rule3AttMustBeWrittenInCamelCase } from "./JSXRule/Rule3.jsx";
import { Rule4EmbedJSExpressionInJSXUsingCurlyBraces } from "./JSXRule/Rule4.jsx";
import { PropsInMethod } from "./Props/Props.jsx";
import { DefaultPropsPattern } from "./Props/DefaultPropsPattern.jsx";
import { SpreadPropsPattern } from "./Props/SpreadPropsPattern.jsx";
import { WrapJsxPropsPattern } from "./Props/WrapJsxPropsPattern.jsx";
import { ConditionalRendering } from "./Rendering/conditionalRendering.jsx";
import { ListRendering } from "./Rendering/ListRendering.jsx";
import { KeyAntiPatternLists } from "./Rendering/KeyAntiPatternInLists.jsx";
import { InlineStyleJSX } from "./Styles/InlineStyle.jsx";
import { ExternalStyleJSX } from "./Styles/ExternalStyle.jsx";
import { ModuleStyle } from "./Styles/ModuleStyle.jsx";
import { EventHandling } from "./EventHandlerExample/EventHandling.jsx";
import { SubscribeEvent } from "./EventHandlerExample/SubsribeEvent.jsx";
import { ContactUsEvent } from "./EventHandlerExample/ContactUsEvent.jsx";
import { IncreaseCounterUsingLazyInitializationWithUseState } from "./UseState/IncreaseCounterUsingLazyInitializationWithUseState.jsx";
import { UseStateLoginExample } from "./UseState/UseStateLoginExample.jsx";
import { HookRules } from "./UseState/HookRules.jsx";
import { SetStateUsingPrevState } from "./UseState/SetStateUsingPrevState.jsx";
import { BatchUpdates } from "./UseState/BatchUpdates.jsx";
import { UseStateWithObject } from "./UseState/UseStateWithObject.jsx";
import { UseStateWithArrayCollection } from "./UseState/UseStateWithArrayCollection.jsx";
import { SharingStateBetweenComponent } from "./UseState/SharingStateBetweenComponents.jsx";
import { CounterWithReducer } from "./UseReducer/CounterWithReducer.jsx";
import { ShoppingCartWithReducer } from "./UseReducer/ShoppingCartWithReducer.jsx";
import { LazyInitializationUsingReducer } from "./UseReducer/LazyInitializationUsingReducer.jsx";
import { ImplementUseStateByUseReducer } from "./UseReducer/ImplementUseStateByUseReducer.jsx";
import ClassCounter from "./Hooks/UseState/ClassCounter.jsx";
import ClassComponent from "./Class/ClassComponent.jsx";
import ConditionalComponentDidUpdateWithClass from "./Hooks/UseEffect/ConditionalComponentDidUpdateWithClass.jsx";
import ConditionalComponetDidUpdateUsingUseEffectWithFunction from "./Hooks/UseEffect/ConditionalComponetDidUpdateUsingUseEffectWithFunction.jsx";
import RunOnceComponentDidMountAndUnmountWithClass from "./Hooks/UseEffect/RunOnceComponentDidMountAndUnmountWithClass.jsx";
import RunOnceUseEffectWithFunction from "./Hooks/UseEffect/RunOnceUseEffectWithFunction.jsx";
import CleanupUsingUseEffectWithFunction from "./Hooks/UseEffect/CleanupUsingUseEffectWithFunction.jsx";
import UseEffectWithIncorrectDependency from "./Hooks/UseEffect/UseEffectWithIncorrectDependency.jsx";
import MultipleUseEffectInOneComponentWithFunction from "./Hooks/UseEffect/Example/MultipleUseEffectInOneComponentWithFunction.jsx";
import FetchingData from "./Hooks/UseEffect/Example/FetchingData.jsx";
import ComponentA from "./Hooks/UseContext/ComponentA.jsx";
import CounterObjectWithReducer from './Hooks/UseReducer/CounterObjectWithReducer.jsx';
import UseReducerWithUseContext from './Hooks/UseReducer/UseReducerWithUseContext.jsx';
import GetDataWithUseEffectAndUseState from './Hooks/UseReducer/GetDataWithUseEffectAndUseState.jsx';
import GetDataWithUseEffectAndUseReducer from './Hooks/UseReducer/GetDataWithUseEffectAndUseReducer.jsx';
import ParentComponent from './Hooks/UseCallback/ParentComponent.jsx';
import CounterWithMemo from './Hooks/UseMemo/CounterWithMemo.jsx';

// Create context
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div>
      <h1>## Starting Hooks ##</h1> 

      <ClassComponent /> <hr></hr>

      <ClassCounter />  <hr></hr>

      <ConditionalComponentDidUpdateWithClass />
      <ConditionalComponetDidUpdateUsingUseEffectWithFunction />  <hr></hr>
      
      <RunOnceComponentDidMountAndUnmountWithClass />
      <RunOnceUseEffectWithFunction />  <hr></hr>

      <CleanupUsingUseEffectWithFunction /> <hr></hr>

      <UseEffectWithIncorrectDependency /> <hr></hr>

      <MultipleUseEffectInOneComponentWithFunction /> <hr></hr>

      <FetchingData /> <hr></hr>

      <h3>Use Context Hook</h3>
      <UserContext.Provider value={"UseContext"}>
        <ChannelContext.Provider value={"Codevolution"}>
           <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider> <hr></hr>

      <UseReducerWithUseContext /> <hr></hr>

      <GetDataWithUseEffectAndUseState />
      <GetDataWithUseEffectAndUseReducer /> <hr></hr>

      <ParentComponent /> <hr></hr>

      <CounterWithMemo /> <hr></hr>
      

      








      <hr></hr> <hr></hr> <hr></hr>
      <h1>## React19 Tutorial ##</h1>
      <ButtonWithArrowAndSimpleFunction />  <hr></hr>

      <WithJSX />
      <WithoutJSX />  <hr></hr>

      <Rule1ReturnSingleRootElementFromComponent />
      <Rule2AllTagsMustBeProperlyClosed />
      <Rule3AttMustBeWrittenInCamelCase />
      <Rule4EmbedJSExpressionInJSXUsingCurlyBraces />  <hr></hr>

      <PropsInMethod
        title="Gamming Laptop" // String uses "" & others uses {}.
        price={50000}
        inStock={true}
        categories={["Electronis", "Computer", "Gamming"]}
      />  <hr></hr>

      <DefaultPropsPattern
        //name="Akash" // Default value 'Guest' will be used.
        message="how are you?"
      />  <hr></hr>

      <SpreadPropsPattern
        id="ABC"
        name="James"
        message="Welcome to Goa hotel!"
      />   <hr></hr>

      <WrapJsxPropsPattern title="User Profile">
        <p>Name</p>
        <p>name.lastname@gmail.com</p>
        <button>Edit Profile</button>
      </WrapJsxPropsPattern>   <hr></hr>

      <ConditionalRendering
        name="Akash"
        isOnline={true}
        hideOffline={false}
        isPremium={true}
        isNewUser={false}
        role="Admin"
      />   <hr></hr>

      <ConditionalRendering
        name="Rushi"
        isOnline={false}
        hideOffline={false}
        isPremium={true}
        isNewUser={true}
        role="VIP"
      />    <hr></hr>

      <ListRendering />  <hr></hr>

      <KeyAntiPatternLists />  <hr></hr>

      <InlineStyleJSX>Internal CSS style changes has been saved</InlineStyleJSX>
      <InlineStyleJSX statusCode="500">
        Internal CSS style failed went wrong!
      </InlineStyleJSX>  <hr></hr>

      <ExternalStyleJSX status="pass">
        External style CSS Applied
      </ExternalStyleJSX>
      <ExternalStyleJSX status="fail">
        External style CSS Failed to Apply
      </ExternalStyleJSX>  <hr></hr>

      <ModuleStyle status="pass">Using Module style CSS</ModuleStyle> <hr></hr>

      <EventHandling text="Press" />  <hr></hr>

      <SubscribeEvent />
      <ContactUsEvent /> <hr></hr>

      <IncreaseCounterUsingLazyInitializationWithUseState />
      <UseStateLoginExample/> <hr></hr>
      
      <HookRules />
      <HookRules isPremium= {true}/> <hr></hr>

      <SetStateUsingPrevState /> <hr></hr>
      
      <BatchUpdates /> <hr></hr>
      
      <UseStateWithObject /> <hr></hr>
      <UseStateWithArrayCollection /> <hr></hr>

      <SharingStateBetweenComponent /> <hr></hr>

      <CounterWithReducer /> 
      <CounterObjectWithReducer /> <hr></hr>

      <ShoppingCartWithReducer /> <hr></hr>

      <LazyInitializationUsingReducer /> <hr></hr>

      <ImplementUseStateByUseReducer /> <hr></hr>

      
    </div>
  );
}

export default App;
