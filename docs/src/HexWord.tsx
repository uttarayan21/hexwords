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
      <Navbar bg="dark" variant="dark" className="mb-4 justify-content-between">
        <Navbar.Brand href="#home">Hex Words</Navbar.Brand>
        <Navbar.Text>
          <a href="#faq">FAQ</a>
        </Navbar.Text>
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
              <Button variant="link">View in Dictionary.com</Button>
            </Card.Link>
            <br />
            <Card.Link href={"https://www.urbandictionary.com/define.php?term=" + this.props.word} target="_blank">
              <Button variant="link">View in Urbandictionary.com</Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

class HexWordFaq extends React.Component {
  render() {
    return (
      <Container className="mt-4">
        <div id="faq">
          <p>Q: What is this ?</p>
          <p>Ans: A list of english words that can be represented using hex digits </p>
          <p>Q: Why ? </p>
          <p>
            Ans: I saw a <a href="https://youtu.be/nNBktKw9Is4?t=96">video</a> on{" "}
            <a href="https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w">liveoverflow's</a> youtube channel where
            the hex value 0xf00dbabe was written to and address. And so I wanted to explore if similar names existed.
          </p>
          <p>Q: Where is the code ?</p>
          <p>
            A python code is here <a href="https://github.com/uttarayan21/hexwords">uttarayan21/hexwords</a>
            <br />
            The code for this website is on the same repo just in the{" "}
            <a href="https://github.com/uttarayan21/hexwords/tree/master/docs">docs</a> directory
          </p>
          <p>Q: Why is this so buggy ?</p>
          <p>Ans: Also this is my first react app so there might still be a lot of bugs </p>
          <p>Q: Why do some words don't have meaning or gets redirected to something else ?</p>
          <p>Some of the words in the wordlist don't seem to have a dictionary entry</p>
          <p>Q: More features ?</p>
          <p>I also want to add stuff like filter and custom values for the english letters </p>
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
        <HexWordList />
        <HexWordFaq />
      </div>
    );
  }
}

export default HexWord;
