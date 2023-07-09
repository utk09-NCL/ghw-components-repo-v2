import "./App.css";
// import "ghw-components-ut-test-v2/dist/style.css";
import CustomButton from "./components/Button";
import { Button } from "ghw-components-ut-test-v2";
import TestArea from "./TestArea";

export default function App() {
  return (
    <main>
      <section>
        <CustomButton className="bg-red-500 hover:bg-yellow-600" onClick={() => console.log("clicked!!")}>
          Helllooooooo!!!!
        </CustomButton>
      </section>

      <TestArea>
        <Button className="bg-indigo-500 hover:bg-green-600" onClick={() => console.log("good-bye" + new Date())}>
          This is lib button
        </Button>
      </TestArea>
    </main>
  );
}
