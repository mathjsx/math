import './App.css';
import { MathJaxContext, MathJax } from 'better-react-mathjax';
function App() {
const config = {
  loader: { load: ["input/asciimath"] },
  asciimath: {
    displaystyle: true,
    delimiters: [
      ["$", "$"],
      ["`", "`"]
    ]
  }
};
  return (
    
    <div className="App">
  
      <header className="App-header">
        <h1>BPHY</h1>
        <div>
        <MathJaxContext version={3} config={config}>
        <MathJax hideUntilTypeset={"first"}>

<ol type="1">
<li> Bilangan berpangkat</li>
<li> Pertidaksamaan  Linier</li>
<li> Barisan dan Deret</li>
<li> Statistika</li>
<li> Persamaan kuadrat</li>
<li> Persamaan lingkaran</li>
<li> Matrik</li>
<li> Logika matematika</li>
<li> Program linier</li>
<li> Geometri</li>
<li> Transformasi</li>
<li> Ruang 3 D</li>
<li> Peluang</li>
<li> Limit</li>
<li> Deferensial</li>
<li> Integral</li>

</ol>


        

        
                                                              
        </MathJax>
        </MathJaxContext>
      </div>
    
     
      </header>
      
    </div>
  );
}

export default App;
