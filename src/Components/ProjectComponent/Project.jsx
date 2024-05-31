import './Project.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Project({project}){
    return(
        <>
          <div className="ProjectCard" >
                <img src={project.imgURL} className="Preview card-img-top" alt="Preview" style={{margin:'auto'}}/>
                <div className="card-body">
                  
                    <h1 style={{textAlign:'center'}}className="card-title">{project.title}</h1>
                    <p className="card-text">{project.description}</p>
                    <button style={{ backgroundColor: '#a7b5b9', color: '#fff', width: '100%', height: 'fit-content', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center',padding: '10px', margin: 0 , cursor: 'pointer', border: '1px solid #a7b5b9', borderRadius: '10px',fontSize: '1.2em',transition: 'background-color 0.3s' }} onMouseOver={(e) => e.target.style.backgroundColor = '#dbd3d8'} onMouseOut={(e) => e.target.style.backgroundColor = '#a7b5b9'}>View</button>
                </div>
            </div>
        </>
    );
}
export default Project;