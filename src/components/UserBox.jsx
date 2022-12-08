export const UserBox = ({ user, changeUser }) => {
  return (
    <div onClick={() => changeUser(user.id)} id="display">
      <img id="user-image-border" src={user.image} />
      <div>
        <p style={{ marginTop: "15px" }}>{user.firstName}</p>
        <p style={{ color: "grey", fontSize: "14px" }}>{user.birthDate}</p>
      </div>
    </div>
  );
};
