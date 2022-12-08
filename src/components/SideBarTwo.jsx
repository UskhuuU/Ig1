import React from "react";
import "../App.css";

function SideBarTwo() {
  return (
    <div className="sideBarTwo">
      <div className="profileSwitch">
        <div>
          <div className="profilePic"></div>
        </div>
        <div className="Names">
          <p className="displayName">dulguun_0601</p>
          <p className="Name">March</p>
        </div>
        <div className="SwitchDiv">
          <p className="Switch">Switch</p>
        </div>
      </div>
      <div className="Suggested">
        <p
          style={{
            color: "gray",
            fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
            fontSize: "14px",
          }}
        >
          Suggestions For You
        </p>
        <p
          style={{
            marginLeft: "200px",
            color: "black",
            fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
            fontSize: "small",
          }}
        >
          See All
        </p>
      </div>
      <div className="users">
        <div>
          <div className="profileSwitch">
            <div>
              <div
                className="profilePic"
                style={{ width: "30px", height: "30px" }}
              ></div>
            </div>
            <div className="Names">
              <p className="displayName">Dulguun</p>
              <p className="Name">Suggested</p>
            </div>
            <div className="SwitchDiv">
              <p className="Switch" style={{ marginLeft: "230px" }}>
                Follow
              </p>
            </div>
          </div>
          <div className="profileSwitch">
            <div>
              <div
                className="profilePic"
                style={{ width: "30px", height: "30px" }}
              ></div>
            </div>
            <div className="Names">
              <p className="displayName">Dulguun</p>
              <p className="Name">Suggested</p>
            </div>
            <div className="SwitchDiv">
              <p className="Switch" style={{ marginLeft: "230px" }}>
                Follow
              </p>
            </div>
          </div>
          <div className="profileSwitch">
            <div>
              <div
                className="profilePic"
                style={{ width: "30px", height: "30px" }}
              ></div>
            </div>
            <div className="Names">
              <p className="displayName">Dulguun</p>
              <p className="Name">Suggested</p>
            </div>
            <div className="SwitchDiv">
              <p className="Switch" style={{ marginLeft: "230px" }}>
                Follow
              </p>
            </div>
          </div>
          <div className="profileSwitch">
            <div>
              <div
                className="profilePic"
                style={{ width: "30px", height: "30px" }}
              ></div>
            </div>
            <div className="Names">
              <p className="displayName">Dulguun</p>
              <p className="Name">Suggested</p>
            </div>
            <div className="SwitchDiv">
              <p className="Switch" style={{ marginLeft: "230px" }}>
                Follow
              </p>
            </div>
          </div>
          <div className="profileSwitch">
            <div>
              <div
                className="profilePic"
                style={{ width: "30px", height: "30px" }}
              ></div>
            </div>
            <div className="Names">
              <p className="displayName">Dulguun</p>
              <p className="Name">Suggested</p>
            </div>
            <div className="SwitchDiv">
              <p className="Switch" style={{ marginLeft: "230px" }}>
                Follow
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p
          style={{
            fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
            color: "gray",
            fontSize: "11px",
            marginTop: "30px",
          }}
        >
          About·Help·Press·API·Jobs·Privacy·Terms·Locations·
          <br />
          Language
          <br />
          <br />
          <p>© 2022 INSTAGRAM FROM META</p>
        </p>
      </div>
    </div>
  );
}

export default SideBarTwo;
