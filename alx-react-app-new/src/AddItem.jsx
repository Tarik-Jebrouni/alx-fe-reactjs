export default function AddItem() {
  const value = "default";
  return (
    <form action="submit">
      <label htmlFor="form">Type Something: </label>
      <input type="text" value={value} name="form" id="form" />
    </form>
  );
}
