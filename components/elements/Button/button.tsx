export default function Button(props: { value: string; class: string }) {
  return (
    <>
      <button className={props.class}>{props.value}</button>
    </>
  );
}
