import React from "react";
import { useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import { useContext } from "react";
const NavBar = () => {
  const navigate = useNavigate();
  const { userData, backendUrl, setUserData, setIsLoggedin } =
    useContext(AppContent);

  return (
    <div className="w-full flex justify-between items-center p-6 px-24 bg-pink-200 absolute top-0">
      <figure className="w-28">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7bced49-73a3-43c1-b3ce-fe419a596a72/dh9f1xg-6b1c66e9-ac4d-4581-8d1f-af00b026ad15.png/v1/fill/w_1192,h_670/malenia__blade_of_miquella_elden_ring_png_render_by_marcopolo157_dh9f1xg-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjE2MCIsInBhdGgiOiJcL2ZcL2M3YmNlZDQ5LTczYTMtNDNjMS1iM2NlLWZlNDE5YTU5NmE3MlwvZGg5ZjF4Zy02YjFjNjZlOS1hYzRkLTQ1ODEtOGQxZi1hZjAwYjAyNmFkMTUucG5nIiwid2lkdGgiOiI8PTM4NDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.oPPSVYJmUrDJI8Ow4hb11xTVPmx-8OnQAIm0m4oYd7w"
          alt=""
          className="w-full"
        />
      </figure>
      {userData ? (
        <div className="bg-green-400 text-black p-2 rounded-xl">
          <h1>{userData.name}</h1>
          <button className="p-2">Logout</button>
        </div>
      ) : (
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="border flex items-center gap-2 bg-purple-500 p-2 rounded-xl"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default NavBar;
