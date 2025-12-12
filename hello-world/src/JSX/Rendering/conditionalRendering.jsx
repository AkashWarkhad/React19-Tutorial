export const ConditionalRendering = ({
  name,
  isOnline,
  hideOffline,
  isPremium,
  isNewUser,
  role,
}) => 
{
  if (hideOffline && !isOnline) 
  {
    // If Statement with AND
    return null;
  }

  let roleBadge = null; //Variable use for complex logic

  if (role === "Admin") 
  {
    roleBadge = <span> 🔑 Admin</span>;
  } 
  else if (role === "Moderator") 
  {
    roleBadge = <span> 👮‍♂️ Moderator</span>;
  } 
  else if (role === "Vip") 
  {
    roleBadge = <span> 💎VIP</span>;
  }

  return (
    <div>
      <h3>
        {name}
        {isPremium && <span>⭐</span>}
        {isNewUser && <span>🥳</span>}
        {roleBadge}
      </h3>

      <span>{isOnline ? "🟢Online" : "⚫Offline"}</span>

      <p>{isOnline ? "Available for chat" : "Not Available"}</p>

      { isOnline   // Ternary Operator
        ? (<button>Send Message</button>) 
        : (<small>Check back later</small>)
      }

    </div>
  );
};
