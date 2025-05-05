import log from "@/lib/logger";

function App() {
  return (
    <>
      <h1>My App</h1>
      <button onClick={() => log.trace("Trace log triggered")}>
        Trace log
      </button>
      <button onClick={() => log.debug("Debug log triggered")}>
        Debug log
      </button>
      <button onClick={() => log.info("Info log triggered")}>Info log</button>
      <button onClick={() => log.warn("Warning log triggered")}>
        Warning log
      </button>
      <button onClick={() => log.error("Error log triggered")}>
        Error log
      </button>
    </>
  );
}

export default App;
