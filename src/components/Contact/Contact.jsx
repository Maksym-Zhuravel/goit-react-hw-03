export default function Contact({ contacts: { id, name, number }, onDelete }) {
  return (
    <>
      <span>{name}</span>
      <span>{number}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
}
