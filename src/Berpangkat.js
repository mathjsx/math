import './App.css';
import { MathJaxContext, MathJax } from 'better-react-mathjax';
function Berpangkat() {
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
        <h1>Bilangan berpangkat</h1>
        <div>
        <MathJaxContext version={3} config={config}>
        <MathJax hideUntilTypeset={"first"}>
         {`perkalian bilangan berpangkat dengan basis yang sama
                \\[a^n.a^m=a^{n+m}\\]` } 
        {`pembagian bilangan berpangkat dengan basis yang sama
                \\[\\frac{a^n}{a^m}=a^{n-m}\\]` } 
{`akar bilangan berpangkat 
                \\[\\sqrt[m]{a^n}=a^{\\frac{n}{m}}\\]` } 
{`pemangkatan bilangan berpangkat
                \\[(a^n)^m=a^{n.m}\\]` } 

   
           
                                                 
        </MathJax>
        </MathJaxContext>
      </div>
    
     
      </header>
      
    </div>
  );
}

export default Berpangkat;
