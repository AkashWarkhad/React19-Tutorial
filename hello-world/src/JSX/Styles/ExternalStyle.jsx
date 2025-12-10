import "./StyleExternal.css";

export const ExternalStyleJSX = ({ children, status = "pass" }) => 
{
  return <div className={`base ${status}`}>
    {children}
    </div>;
};
