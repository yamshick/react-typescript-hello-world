import { createRoot } from "react-dom/client";
import { App } from "./app";

const rootElement: HTMLElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(<App />);
