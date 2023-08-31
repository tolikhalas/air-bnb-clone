import './App.css';
import Input from "./Input";

function App() {

  const sampleLabelText = "Label";
  const samplePlaceholderText = "Placeholder";

  return (
    <div>
      <Input
        labelText={sampleLabelText}
        placeholderText={samplePlaceholderText}/>
    </div>
  );
}

export default App;
