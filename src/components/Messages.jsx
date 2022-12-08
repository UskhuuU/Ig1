import React from "react";
import { UserBox } from "../components/UserBox";
import { useEffect, useState } from "react";
import { useInstance } from "../components/useInstance";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Messages = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [whichUser, setWhichUser] = useState(1);

  const [currentUser, setCurrentUser] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const response = await useInstance.get(`users`);
    setData(response.data.users);
    setIsLoading(false);
    console.log(response);
  };
  const toggleTheme = (id) => {
    setCurrentUser((prev) => ({
      [id]: !prev[id],
    }));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container id="container1">
      <Row id="row">
        <Col sm={4} id="users1">
          <Row id="myname">_uskhuuu_</Row>
          <div style={{ overflow: "scroll" }}>
            {isLoading ? (
              <p>lauding</p>
            ) : (
              data.map((user, id) => {
                return (
                  <div
                    style={{
                      backgroundColor: currentUser[`${id}`] && "gainsboro",
                    }}
                    onClick={() => toggleTheme(id)}
                  >
                    <UserBox key={id} user={user} changeUser={setWhichUser} />
                  </div>
                );
              })
            )}
          </div>
        </Col>
        <Col sm={7}>
          {isLoading ? (
            <p>lauding</p>
          ) : (
            <div id="profile">
              <img id="user-image-border2" src={data[whichUser - 1].image} />
              <div id="about">
                <div>Firstname: {data[whichUser - 1].firstName}</div>
                <div>Lastname: {data[whichUser - 1].lastName}</div>
                <div>Email: {data[whichUser - 1].email}</div>
                <div>Gender: {data[whichUser - 1].gender}</div>
                <div>Username: {data[whichUser - 1].username}</div>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};
