import Notification from "./Notification";

export default function AddContactNotifications({
  isDuplicateContact,
  contacts,
}) {
  return (
    <>
      {isDuplicateContact?.duplicateValue === "all" && (
        <Notification
          message={`${
            contacts[isDuplicateContact.duplicateIndex].name
          } with number ${
            contacts[isDuplicateContact.duplicateIndex].number
          } is already in contacts!`}
        />
      )}
      {isDuplicateContact?.duplicateValue === "name" && (
        <Notification
          message={`${
            contacts[isDuplicateContact.duplicateIndex].name
          } is already in contacts!`}
        />
      )}
      {isDuplicateContact?.duplicateValue === "number" && (
        <Notification
          message={`${
            contacts[isDuplicateContact.duplicateIndex].number
          } is already in contacts! (${
            contacts[isDuplicateContact.duplicateIndex].name
          } has this number)`}
        />
      )}
    </>
  );
}
