export default function Label(props: {
  htmlFor: string;
  value: string;
  class: string;
}) {
  return (
    <>
      <label htmlFor={props.htmlFor} className={props.class}>
        {props.value}
      </label>
    </>
  );
}
