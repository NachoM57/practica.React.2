import "../style.css/Contador.css"

function Contador({ numClicks }) {
    return (
        <div className="Contador">
            {numClicks}
        </div>
    );
}


export default Contador;