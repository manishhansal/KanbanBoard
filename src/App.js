import './App.css';
import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react'

const myInput = {
  width: "20%",
  height : "35px",
  border: "1px solid black",
  borderRadius: "5px",
  marginRight: "5px",
  padding:"5px"
}

const myInputButton = {
  height: "35px",
  borderRadius: "5px",
}

const myDiv = {
  width: "18%",
  border: "1px solid #cecece",
  borderRadius: "10px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  height: "650px"
}

const myButton = {
  width: "20px",
  height: "20px",
  fontWeight: "900",
  fontSize: "20px",
  alignText: "center",
  padding: "2px",
  display: "flex"
}

function App() {
  const [form, setForm] = useState({
    content: "",
    status: "",
    id: ""
  });

  const [data, setData] = useState([]);


  const handleChange = (e) => {
    setForm({
      content: e.target.value,
      status: 0,
      id: uuidv4()
    });
  }

  const handleSubmit = () => {
    setData((d) => [...d, form])
  }
  
  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <input type="text" placeholder="Enter here" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" style={myInput} onChange={handleChange} />
      <button style={myInputButton} type="button"  onClick={handleSubmit}>Submit</button>

      <div style={{width:"100%", display: "flex", marginTop: "20px", justifyContent: "space-around"}}>
        <div style={myDiv}>
          <h4>Initial Stage</h4>
          <div>
            {data?.filter((item) => item.status === 0).map((elm) => {
              return (
                <div style={{display:"flex", justifyContent:"space-between",padding:"5px"}} key={elm.id}>
                  <p>{elm.content}</p>
                  <button style={myButton} onClick={() => {
                    setData((d) => {
                      for (let i = 0; i < data.length; i++) {
                        if (data[i].id === elm.id) {
                          data[i].status = 1
                        }
                      }
                      return [...d]
                    })
                  }}>
                    <img style={{width:"100%", height:"100%"} } src='forward-arrow.png' alt='forward-arrow'/>
                  </button>
                </div>
                
                )
            })}
          </div>
        </div>
        <div style={myDiv}>
          <h4>Stage 2</h4>
          <div>
            {data?.filter((item) => item.status === 1).map((elm) => {
              return (
                <div style={{display:"flex", justifyContent:"space-between",padding:"5px"}} key={elm.id}>
                  <p>{elm.content}</p>
                  <div style={{ display: "flex" }}>
                    <button style={ myButton} onClick={() => {
                    setData((d) => {
                      for (let i = 0; i < data.length; i++) {
                        if (data[i].id === elm.id) {
                          data[i].status = 0
                        }
                      }
                      return [...d]
                    })
                    }}>
                      <img style={{width:"100%", height:"100%"} } src='back-arrow.png' alt='back-arrow'/>
                  </button>
                    <button style={myButton} onClick={() => {
                    setData((d) => {
                      for (let i = 0; i < data.length; i++) {
                        if (data[i].id === elm.id) {
                          data[i].status = 2
                        }
                      }
                      return [...d]
                    })
                    }}>
                      <img style={{width:"100%", height:"100%"} } src='forward-arrow.png' alt='forward-arrow'/>
                  </button>
                  </div>
                  
                </div>
                
                )
            })}
          </div>
        </div>
        <div style={myDiv}>
          <h4>Stage 3</h4>
          <div>
            {data?.filter((item) => item.status === 2).map((elm) => {
              return (
                <div style={{display:"flex", justifyContent:"space-between",padding:"5px"}} key={elm.id}>
                  <p>{elm.content}</p>
                  <div style={{ display: "flex" }}>
                    <button style={myButton} onClick={() => {
                    setData((d) => {
                      for (let i = 0; i < data.length; i++) {
                        if (data[i].id === elm.id) {
                          data[i].status = 1
                        }
                      }
                      return [...d]
                    })
                    }}>
                       <img style={{width:"100%", height:"100%"} } src='back-arrow.png' alt='back-arrow'/>
                  </button>
                    <button style={myButton} onClick={() => {
                    setData((d) => {
                      for (let i = 0; i < data.length; i++) {
                        if (data[i].id === elm.id) {
                          data[i].status = 3
                        }
                      }
                      return [...d]
                    })
                    }}>
                      <img style={{width:"100%", height:"100%"} } src='forward-arrow.png' alt='forward-arrow'/>
                  </button>
                  </div>
                </div>
                
                )
            })}
          </div>
        </div>
        <div style={myDiv}>
          <h4>Stage 4</h4>
          <div>
            {data?.filter((item) => item.status === 3).map((elm) => {
              return (
                <div style={{display:"flex", justifyContent:"space-between",padding:"5px"}} key={elm.id}>
                  <p>{elm.content}</p>
                  <div style={{ display: "flex" }}>
                    <button style={myButton} onClick={() => {
                    setData((d) => {
                      for (let i = 0; i < data.length; i++) {
                        if (data[i].id === elm.id) {
                          data[i].status = 2
                        }
                      }
                      return [...d]
                    })
                    }}>
                       <img style={{width:"100%", height:"100%"} } src='back-arrow.png' alt='back-arrow'/>
                  </button>
                    <button style={myButton} onClick={() => {
                    setData((d) => {
                      for (let i = 0; i < data.length; i++) {
                        if (data[i].id === elm.id) {
                          data[i].status = 4
                        }
                      }
                      return [...d]
                    })
                    }}>
                      <img style={{width:"100%", height:"100%"} } src='forward-arrow.png' alt='forward-arrow'/>
                  </button>
                  </div>
                </div>
                
                )
            })}
          </div>
        </div>
        <div style={myDiv}>
          <h4>Completed</h4>
          <div>
            {data?.filter((item) => item.status === 4).map((elm) => {
              return (
                <div style={{display:"flex", justifyContent:"space-between",padding:"5px"}} key={elm.id}>
                  <p>{elm.content}</p>
                  <div style={{ display: "flex" }}>
                    <button style={myButton} onClick={() => {
                    setData((d) => {
                      for (let i = 0; i < data.length; i++) {
                        if (data[i].id === elm.id) {
                          data[i].status = 3
                        }
                      }
                      return [...d]
                    })
                    }}>
                       <img style={{width:"100%", height:"100%"} } src='back-arrow.png' alt='back-arrow'/>
                  </button>
                    <button style={myButton}>
                      <img style={{width:"100%", height:"100%"} } src='delete.png' alt='delete'/>
                    </button>
                  </div>
                </div>
                
                )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
