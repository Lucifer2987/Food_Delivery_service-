import "../styles/getTheApp.css";
import Button from "../components/Button";

const GetTheApp = () => {
  return (
    <div className="get-the-app">
      <h2>Download Our App</h2>
      <p>Get the best food delivery experience with our mobile app.</p>
      <div className="app-buttons">
        <Button label="Download on App Store" onClick={() => alert("Redirecting to App Store")} />
        <Button label="Get it on Google Play" onClick={() => alert("Redirecting to Google Play Store")} />
      </div>
    </div>
  );
};
export default GetTheApp;