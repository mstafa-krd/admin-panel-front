import User from "../user/user.jsx";

export default function NewUser() {
  return (
    <div className="continer">
      <User title="Add new user" buttonTitle="Add" state="newUser" />
    </div>
  );
}
