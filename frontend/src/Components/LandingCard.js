import React from "react";
import styles from "./LandingCard.module.css";
import Card from "react-bootstrap/Card";
import me from "../assets/me.jpeg";

const LandingCard = () => {
  return (
          <Card border="dark" text="white" className={styles.Card}>
            <Card.Img variant="top" className={styles.cardImg} src={me} />
            <Card.Body>
              <Card.Title className={`text-center ${styles.cardTitle}`}>
                Hello world!
              </Card.Title>
              <Card.Text className="text-center">
                My name is Jorge Lozano and I am a software developer
              </Card.Text>
            </Card.Body>
          </Card>
        
  );
};

export default LandingCard;
