import Editor2 from "./components/Editor2";
import { PostProvider } from "./context";
import DisplayPost from "./components/DisplayPost";

function App() {
  return (
    <>
      <PostProvider>
        <Editor2 />
        <DisplayPost />
      </PostProvider>
    </>
  );
}

export default App;
