export const InlineStyleJSX = ({ children, statusCode = "200" }) => {
  return (
    <div
      style={{
        backgroundColor: statusCode === "200" ? "lightgreen" : "red",
        color: "black",
        padding: "16px",
        marginBottom: "16px",
      }}
    >
      {children}
    </div>
  );
};
