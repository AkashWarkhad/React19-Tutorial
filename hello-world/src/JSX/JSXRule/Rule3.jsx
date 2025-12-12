// Rule 3 : Attributes names must be written in the CamelCase.

// export const Rule3AttMustBeWrittenInCamelCase = ()=>{
//     return(
//         <form>
//             <label class="contact-from">Username:</label>
//             <input type="text" id="username" class="form-input" />
//             <br />

//             <label for="email">Email</label>
//             <input type="email" id="email" class="form-input" tabindex="1" />
//             <br /> <br />
//         </form>
//     );
// }

// Fixed Rule 3 cases
// class -> className, for -> htmlFor, tabindex -> tabIndex

export const Rule3AttMustBeWrittenInCamelCase = () => {
  return (
    <form>
      <label className="contact-from">Username:</label>
      <input type="text" id="username" className="form-input" />
      <br />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" className="form-input" tabIndex="1" />
      <br /> <br />
    </form>
  );
};
