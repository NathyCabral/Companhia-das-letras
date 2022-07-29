import './header.css'

function Header(props) {
  return (
    <div className="header">
      <img src={props.image} alt={props.description} />
    </div>
  );
}

export default Header;
