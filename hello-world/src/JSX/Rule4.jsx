// Rule 4 :We can embed JS expression directly in your markup using curly braces

export const Rule4EmbedJSExpressionInJSXUsingCurlyBraces = () => {
  const name = "Akash Warkhad";
  const role = "Software Engineer";
  const yearOfExp = 4;
  const isAvailable = true;
  const birthDayYear = "1999";

  return (
    <>
      <h2>Candidate Details: {name}</h2>
      <p>
        {name} has {role} role with {yearOfExp} year's of experience.
      </p>

      <p> Started his journey from 2021 to {yearOfExp} year now.</p>
      <p>
        Email Address : {name.toLowerCase().replace(" ", ".")}
        {birthDayYear}@gmail.com
      </p>
      <p>
        Status: {isAvailable ? "Available for work." : "Not available for work."}
      </p>
    </>
  );
};
