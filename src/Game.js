const Game = (props) =>{
  const clickGoToGameSite = () =>{
    
  }
  const {img , title , NameCom, link} = props.gameData
  return (
    <a href={link}>
      <article className = "game" onClick={clickGoToGameSite}>
      <MainTitle value = {title}/>
      <MainImage value = {img}/>
      <MainCom value = {NameCom}/>
    </article>
    </a>
    
  );
}
const MainImage = (props) =>{
  return(
    <img src={props.value} alt="" className="img-center"/>
  );
}

const MainTitle = (props) =>{
  return(
    <h2 className="text-center" style={{marginBottom:'5px'}}>{props.value}</h2>
  );
}
const MainCom = (props) =>{
  return (
    <h3 style={{marginInlineStart:'5%'}}>{props.value}</h3>
  );
}
export default Game