import React, { useState, useEffect, useContext } from "react";
import { Container, Table, Button, Row, Col } from "reactstrap";
import { SignUpContext } from "./SignUpContext";
import axios from "axios";
import { Redirect } from "react-router";

const User = (props) => {
  // const [name, setName] = useContext(SignUpContext);
  // const [email, setEmail] = useContext(SignUpContext);

  // const {logged} = useContext(SignUpContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect((e) => {
    const data = JSON.parse(localStorage.getItem("user"));
    console.log(data);
    setName(data.name || "default");
    setEmail(data.email || "default");
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("client email: " + email);

      const response = await axios.delete("http://localhost:4000/user/delete", {
        email,
      });

      console.log(response.data);
      // logged.setIsLoggedIn(false);
      props.history.push("/");
      // Redirect("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="userBackground">
      <Container className="themed-container userEdit">
        <Table dark className="userEditTable">
          <thead>
            <tr>
              <th>الإسم الكامل :</th>
              <th>{name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">البريد الإلكتروني :</th>
              <td>{email}</td>
            </tr>
            {/* <tr>
              <th scope="row">كلمة المرور :</th>
              <td></td>
            </tr> */}

            <tr>
              <th scope="row">
                <Row>
                  <Col xs="2">
                    <form onSubmit={handleSubmit}>
                      <input name="email" type="email" value={email} hidden />
                      <Button type="submit" color="danger">
                        تسجيل الخروج
                      </Button>{" "}
                    </form>
                  </Col>
                </Row>
              </th>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default User;
