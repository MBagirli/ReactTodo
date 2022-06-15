import './List.css';
import ListItem from './ListItem';

const List = (props)=>{

  let GetForDel = (item)=>{
    props.forDel(item);
  }

  let content = props.array.length>0 ? props.array.map((element)=>{
   return <ListItem forDel={GetForDel} key={element.Id} item={element} />
  }) : <p className='Default'>There are no goals.Let's add one!</p>;

  return(
    <ul className='List'>
      {content}
    </ul>
  );
}

export default List;