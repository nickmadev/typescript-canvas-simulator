import ComponentPreview from "./ComponentPreview";
import eventCard from "./samples/eventCard";
import loginScreen from "./samples/loginScreen";
import profileHeader from "./samples/profileHeader";
import listScreen from "./samples/listScreen";

function App() {
  return (
    <div className="previewBody">
      <h2>Component Preview Demo</h2>

      <ComponentPreview component={profileHeader} />

      <hr />

      <ComponentPreview component={eventCard} />

      <hr />

      <ComponentPreview component={loginScreen} />

      <hr />

      <ComponentPreview component={listScreen} />
    </div>
  );
}

export default App;
