import { useEffect, useState,useCallback,useMemo} from "react";



const useFetchSpeakers = (URL) => {
// Creamos los estados con  los usuario iniciales
  const [data, setData] = useState([
    { id: "1", name: "Usuario1 apellidos1" },
    { id: "2", name: "Usuario2 apellidos2" },
    { id: "3", name: "Usuario3 apellidos3" },
    { id: "4", name: "Usuario4 apellidos4" },
  ])
  const [text, setText] = useState("");
  const handleTextInput = (e) => {
    setText(e.target.value);
  }
  const handleAddSpeaker = () => {
    setSpeakers(speakers.concat({ id: uuid(), name: text }));
  }
// usamos callback para poder filtrar el usuario 
  const handleRemoveSpeaker = useCallback(
    (id) => setSpeakers(speakers.filter((user) => user.id !== id)),
    [speakers]
  )
  return (
    <div>
      <input type="text" value={text} onChange={handleTextInput} />
      <button type="button" onClick={handleAddSpeaker}>
        + Add a Speaker
      </button>

      <List list={speakers} onRemove={handleRemoveSpeaker} />
    </div>
  );

const List = React.memo(({ list, onRemove }) => {
    console.log("Rendering process for: List Component");
    return (
      <ul>
        {list.map((item) => (
          <ListItem key={item.id} item={item} onRemove={onRemove} />
        ))}
      </ul>
    );
  });
  // para el memo para guardar el id del usuario
  const ListItem = React.memo(({ item, onRemove }) => {
    console.log("Rendering process for: ListItem Component");
    return (
      <li>
        {item.name}
        <button type="button" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </li>
    );
  });

}
export default useFetchSpeakers;
