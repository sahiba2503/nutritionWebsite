
import { useNavigate } from "react-router-dom";
import "../css/Profile.css";
function Sidnavbar() {
    const Navigate = useNavigate();
       const SECTIONS = [
        { key: "Dashboard", icon: "🏠", path:"/homeContent/dashboard"},
        { key: "Add Food", icon: "➕", path:"/homeContent/addFood"},
        { key:  "Suggestions", icon: "💡", path:"/homeContent/suggestions"},
        { key: "Progress", icon: "📈", path:"/homeContent/progess"},
        { key: "Goal", icon: "🎯", path:"/homeContent/goal"},
        { key: "Profile", icon: "👤" , path:"/homeContent/profile"},
        { key: "notifications", icon: "🔔" , path:"/homeContent/dashboard"},
        { key: "password", icon: "🔒" , path:"/homeContent/dashboard"},
         { key: "help", icon: "🕐" , path:"/homeContent/dashboard"},
          ];
 
  return (
    <div className="sidnaveOuterContainer">
     <aside className='dyp-side'>
          <ul>
            {SECTIONS.map((s) => (
              <li key={s.key} className="asideListItem" onClick={()=>Navigate(s.path)}>
                 <span>{s.icon}</span>                  
                 <p>{s.key}</p>
              </li>
            ))}           
          </ul>
        </aside>
    </div>
  )
}

export default Sidnavbar
