// Citation Master
class CitationMaster {
  constructor(){
    this.style = '';
  }

  setStyle(style) {
    if (style === 'APA' || style === 'MLA') {
      this.style = style;
    } else {
      throw new Error('Unsupported citation style.');
    }
  }

  generateCitation(author, title, year, publisher) {
    if (this.style === 'APA') {
      return `${author}. (${year}). ${title}. ${publisher}.`;
    } else if (this.style === 'MLA') {
      return `${author}. "${title}." ${publisher}, ${year}.`;
    } else {
      throw new Error('Citation style not set.');
    }
  }
}

// Example Usage:
const citationMaster = new CitationMaster();
citationMaster.setStyle('APA');
console.log(citationMaster.generateCitation('Doe, J.', 'The Example Book', '2023', 'Example Publisher'));