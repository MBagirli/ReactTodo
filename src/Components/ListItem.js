import './ListItem.css';

const ListItem = (props)=>{

  let RequestForDeleting = (event) =>{
    props.forDel(event.target.id);
  }

  return (
    <li className='ListItem'>
      <div className='ListItem__Date'>
        <p className='ListItem__Date--day'>{props.item.SecondInput.toLocaleString('en-US',{day:'numeric'})}</p>
        <p className='ListItem__Date--month'>{props.item.SecondInput.toLocaleString('en-US',{month:'long'})}</p>
        <p className='ListItem__Date--year'>{props.item.SecondInput.toLocaleString('en-US',{year:'numeric'})}</p>
      </div>
      <p className='ListItem__Description'>{props.item.FirstInput}</p>
      <button onClick={RequestForDeleting} id={props.item.Id} className='ListItem__btn'>
        <svg id={props.item.Id} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="red">
          <path id={props.item.Id} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </li>
  );
}

export default ListItem;