export const getDuplicateContact = (contacts, name, number) => {
  const duplicateContactAllIdx = contacts.findIndex(
    (contact) => contact.name === name && contact.number === number
  );
  const duplicateContactByNameIdx = contacts.findIndex(
    (contact) => contact.name === name
  );
  const duplicateContactByNumberIdx = contacts.findIndex(
    (contact) => contact.number === number
  );

  if (duplicateContactAllIdx !== -1) {
    return {
      duplicateValue: "all",
      duplicateIndex: duplicateContactAllIdx,
    };
  }
  if (duplicateContactByNameIdx !== -1) {
    return {
      duplicateValue: "name",
      duplicateIndex: duplicateContactByNameIdx,
    };
  }
  if (duplicateContactByNumberIdx !== -1) {
    return {
      duplicateValue: "number",
      duplicateIndex: duplicateContactByNumberIdx,
    };
  }

  return null;
};
