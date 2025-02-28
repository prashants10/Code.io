import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import useEditorSocketStore from "../../../store/editorSocketStore";
import { useActiveFileTabStore } from "../../../store/activeFileTabStore";

const EditorComponent = () => {
  const [editorState, setEditorState] = useState({
    theme: null,
  });
  const { editorSocket } = useEditorSocketStore();
  const { activeFileTab, setActiveFileTab } = useActiveFileTabStore();

  editorSocket?.on("readFileSuccess", (data) => {
    console.log("Read file success", data);
    setActiveFileTab(data.path, data.value);
  });

  async function downloadTheme() {
    const response = await fetch("/Dracula.json");
    const data = await response.json();
    setEditorState({ ...editorState, theme: data });
  }

  function handleEditorTheme(editor, monaco) {
    monaco.editor.defineTheme("dracula", editorState.theme);
    monaco.editor.setTheme("dracula");
  }

  useEffect(() => {
    downloadTheme();
  }, []);

  return (
    <>
      {editorState.theme && (
        <Editor
          height={"80vh"}
          width={"100%"}
          defaultLanguage="javascript"
          defaultValue="// Welcome to the playground"
          options={{
            fontSize: 18,
            fontFamily: "monospace",
          }}
          value={
            activeFileTab?.value
              ? activeFileTab.value
              : "// Welcome to the playground"
          }
          onMount={handleEditorTheme}
        />
      )}
    </>
  );
};

export default EditorComponent;
