import React, {Component} from 'react';
import NavbarParagraph from './NavbarParagraphs/NavbarParagraphs';

class Navbar extends Component {

    render(){
      return(
        <div className="navbar">
             <NavbarParagraph name="Przełączniki"></NavbarParagraph>
             <NavbarParagraph name="Grzyby"></NavbarParagraph>
             <NavbarParagraph name="Zdarzenia"></NavbarParagraph>
        </div>
      )
    }
  }


export default Navbar;