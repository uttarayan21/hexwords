import React from "react";
import "./HexWord.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ConvertHexWord from "./ConvertHexWord";

interface HexWordCardProps {
  id: number;
  hexword: string;
  word: string;
}

class HexWordHeader extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Navbar.Brand href="#home">Hex Words</Navbar.Brand>
      </Navbar>
    );
  }
}

class HexWordList extends React.Component {
  render() {
    let hexword = new ConvertHexWord(true);
    let hexwordlist = hexword.WordListToHexList();
    return (
      <Container className="card-columns">
        {hexwordlist.map((hexword, index) => (
          <HexWordCard id={index} word={hexword.word} hexword={hexword.hexword} />
        ))}
      </Container>
    );
  }
}

class HexWordCard extends React.Component<HexWordCardProps> {
  render() {
    return (
      <div key={this.props.id.toString()}>
        <Card>
          <Card.Body>
            <Card.Title> {this.props.word} </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Hex: 0x{this.props.hexword} </Card.Subtitle>
            <Card.Link href={"https://www.dictionary.com/browse/" + this.props.word} target="_blank">
              <Button variant="light">View in Dictionary.com</Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

class HexWordDisclaimer extends React.Component {
  render() {
    return (
      <Container className="mb-4">
        <Button variant="light" data-toggle="collapse" data-target="#faq">
          Faq
        </Button>
        <div className="collapse" id="faq">
          <h5>Q: What is this ?</h5>
          <h6>Ans: A list of english words that can be represented using hex digits </h6>
          <h5>Q: Why ? </h5>
          <h6>
            Ans: I saw a video on liveoverflow's youtube channel where the hex value 0xf00dbabe was written to and
            address. And wanted to explore more similar things.
          </h6>
          <p> Some of the words in the wordlist don't seem to have a dictionary entry</p>
          <p> Also this is my first react app so there might still be a lot of bugs </p>
        </div>
      </Container>
    );
  }
}

class HexWord extends React.Component {
  render() {
    return (
      <div>
        <HexWordHeader />
        <HexWordDisclaimer />
        <HexWordList />
      </div>
    );
  }
}

export default HexWord;
