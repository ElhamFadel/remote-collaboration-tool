import styled from 'styled-components';
const AddNote = () => {
  return <AddNoteStyle onA>+</AddNoteStyle>;
};

export default AddNote;
const AddNoteStyle = styled.button`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 0 0 5px #ccc;
  color: #000;
  cursor: grab;
  font-size: 1.5em;
  font-weight: bold;
  height: 2em;
  margin: 0.5em;
  padding: 0.5em;
  width: 2em;
  position: fixed;
  bottom: 0.4em;
  right: 0.8em;
`;
