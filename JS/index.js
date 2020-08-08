let Hello = <h1>Hello World</h1>

let colors = [
    {id: 1, bgcolor: {bacgroundColor: "#ff9ff3"}, text: "my color box"}
    {id: 1, bgcolor: {bacgroundColor: "#feca57"}, text: "my color box"}
    {id: 1, bgcolor: {bacgroundColor: "#ff6b6b"}, text: "my color box"}
    {id: 1, bgcolor: {bacgroundColor: "#48dbfb"}, text: "my color box"}
    {id: 1, bgcolor: {bacgroundColor: "#1dd1a1"}, text: "my color box"}
    {id: 1, bgcolor: {bacgroundColor: "#f368e0"}, text: "my color box"}
    {id: 1, bgcolor: {bacgroundColor: "#5f27cd"}, text: "my color box"}

]
function App(props){
    console.log(props)
    retun (
        <div className="container" style={ props.bgcolor}>
            
        </div>
        
    )
}
ReactDOM.render(Hello, document.getElementById ("root"));