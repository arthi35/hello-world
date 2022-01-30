import "./App.css";

export default function App() {
  const names = ["Arthi", "Harish", "Kavikumar", "Sankavi", "Vignesh"];
  const users = [
    {
      name: "Arthi",
      profile: "https://data.whicdn.com/images/320234553/original.jpg"
    },
    {
      name: "Suja",
      profile:
        "https://swall.teahub.io/photos/small/205-2059157_girl-baby-image-for-facebook-profile.jpg"
    },
    {
      name: "Sarath",
      profile:
        "https://www.whatsappimages.in/wp-content/uploads/2021/02/nice-shinchan-whatsapp-dp-Images-photo-pics-free-hd.jpg"
    }
  ];
  return (
    <div className="App">
      {/* <Welcome
        name="Arthi"
        profile="https://data.whicdn.com/images/320234553/original.jpg"
      />
      <Welcome
        name="Suja"
        profile="https://swall.teahub.io/photos/small/205-2059157_girl-baby-image-for-facebook-profile.jpg"
      />
      <Welcome
        name="Sarath"
        profile="https://www.whatsappimages.in/wp-content/uploads/2021/02/nice-shinchan-whatsapp-dp-Images-photo-pics-free-hd.jpg"
      /> */}

      {/* Arrays of strings to Arrays of component->Transformation */}
      {/* <h1>Hello CodeSandbox</h1>
      // Arrays of object =>to Arrays of component
     
     <h2>Start editing to see some magic happen!</h2> */}

      {/* {names.map((nm) => (
        <Msg name={nm} />
      ))} */}
      {users.map((usr) => (
        <Welcome name={usr.name} profile={usr.profile} />
      ))}
    </div>
  );
}
function Welcome({ name, profile }) {
  return (
    <div className="welcome">
      <img className="img" src={profile} alt="Profile Pic"></img>
      <h1>Hello,{name}🤠🤓</h1>
    </div>
  );
  function Msg({ name }) {
    // const name = "Arthi";
    return (
      <div className="welcome">
        {/* <img className="img" src={profile} alt="Profile Pic"></img> */}
        <h1>Hello,{name}🤠🤓</h1>
      </div>
    );
  }
}
// function Welcome(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>Hello,{props.name}🤠🤓 </h1>
//     </div>
//   );
// }
