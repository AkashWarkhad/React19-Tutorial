import { BaseActionBtn } from "./BaseActionBtn";

export const ContactUsEvent = () => 
{
    const HandleSendMessage = () => 
    {
        alert("Message sent📤. will revert back soon!");
    };

  return (
    <div>
      <h4>To Contact US Send Message</h4>
      <input type="text" placeholder="Add your message.."></input>
      <BaseActionBtn text="Send Message" onClick={HandleSendMessage} />
    </div>
    );
};
