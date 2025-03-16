import "./App.css";
import Maincontent from "./components/Maincontent";
import Container from "@mui/material/Container";

function App() {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100vw",
                    
                }}
            >
                <Container maxWidth="xl">
                    <Maincontent />
                </Container>
            </div>
        </>
    );
}

export default App;
