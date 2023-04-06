export default function Root(props) {
  return <section style={{backgroundColor: 'red'}}>
    <p>{props.name} is mounted!</p>
    <div id='angular-app'></div>
    </section>;
}
