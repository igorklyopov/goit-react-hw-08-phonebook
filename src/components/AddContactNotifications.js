import Notification from "./Notification";

export default function AddContactNotifications({
  isDuplicateContact,
  contacts,
}) {
  const { duplicateValue, duplicateIndex } = isDuplicateContact;

  return (
    <>
      {duplicateValue === "all" && (
        <Notification
          message={`${contacts[duplicateIndex].name} with number ${contacts[duplicateIndex].number} is already in contacts!`}
        />
      )}
      {duplicateValue === "name" && (
        <Notification
          message={`${contacts[duplicateIndex].name} is already in contacts!`}
        />
      )}
      {duplicateValue === "number" && (
        <Notification
          message={`${contacts[duplicateIndex].number} is already in contacts! (${contacts[duplicateIndex].name} has this number)`}
        />
      )}
    </>
  );
}
