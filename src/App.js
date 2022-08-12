import "./styles.css";
import Tippy from "@tippyjs/react";
export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Tippy content="you are hovering me">
          <button>Hover Me</button>
        </Tippy>
      </div>
    </div>
  );
}
