export default function Input(props: {
  type: "text" | "number" | "button" | "date" | "checkbox" | undefined;
  name: string;
  id: string;
  class: string;
}) {
  return (
    <>
      <input type={props.type} name={props.name} id={props.id} className={props.class} />
    </>
  );
}
