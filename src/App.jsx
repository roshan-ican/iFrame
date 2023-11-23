import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { ApiRequestGet } from "./data/network/services/ApiRequestGet";
import { setTokenDetails } from "./data/redux/slice/tokenSlice";
import { setAuthenticated } from "./data/redux/slice/authSlice";
import { STATUS_CODE_200 } from "./utility/constants/valueConstants";
// import { setTokenDetails, setAuthenticated } from "./path-to-your-redux-actions"; // Import your actions and constants

function App() {
  const dispatch = useDispatch();
  const [iframeUrl, setIframeUrl] = useState("");
  console.log("🪶  file: App.jsx:13  iframeUrl=>", iframeUrl)

  const callApi = async (token) => {
    try {
      ApiRequestGet.verifyClient({
        token,
      }).then((response) => {
        console.log(response.data, "===>response");
        dispatch(setTokenDetails(response.data));
        if (response.statusCode === STATUS_CODE_200) {
          dispatch(setAuthenticated(true));
        } else {
          dispatch(setAuthenticated(true));
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleClick = () => {
    const urlGen = "http://localhost:5020/coupon-svc/api/v1/external/url/generate";
    const currentURL = urlGen;
    setIframeUrl(currentURL);
    console.log(currentURL, "=====>current url");
    const parts = currentURL.split("?");
    console.log(parts, "======>parts");
    const part2 = parts[1];
    console.log(part2, "======>part222");
    let tokenValue1 = part2?.slice(6);
    console.log(tokenValue1, "======>33");
    if (tokenValue1) {
      callApi(tokenValue1);
      // Assuming secureStorage is defined elsewhere
      secureStorage.setItem("token", tokenValue1);
    }
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="App">
      <div className="text-center text-white rounded-sm mt-8 w-[90%]">
        <button style={{ backgroundColor: "#4964f2", color: "#FFF" }} className="p-2" onClick={handleClick}>
          Coupons
        </button>
      </div>
      <div>
        {iframeUrl && (
          <iframe src={iframeUrl} width="100%" height="500px" style={{ border: "none", marginTop: "20px" }}></iframe>
        )}
      </div>
    </div>
  );
}

export default App;
