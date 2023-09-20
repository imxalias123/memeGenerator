import {Component} from 'react'
import {
  Container,
  Heading,
  Wrap,
  Form,
  Label,
  Input,
  Select,
  Option,
  Button,
  Output,
  Para,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    fontSize: fontSizesOptionsList[0].optionId,
    generate: false,
    urlInput: '',
    topInput: '',
    bottomInput: '',
  }

  onChangeInput = event => {
    this.setState({urlInput: event.target.value})
  }

  onChangeTop = event => {
    this.setState({topInput: event.target.value})
  }

  onChangeBottom = event => {
    this.setState({bottomInput: event.target.value})
  }

  onChangeSelect = event => {
    this.setState({fontSize: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()

    this.setState({generate: true})
  }

  render() {
    const {fontSize, generate, urlInput, topInput, bottomInput} = this.state

    return (
      <Container>
        <Heading>Meme Generator</Heading>
        <Wrap>
          <Form onSubmit={this.onSubmitForm}>
            <Label htmlFor="Image URL">Image URL</Label>
            <Input
              value={urlInput}
              id="Image URL"
              type="text"
              onChange={this.onChangeInput}
            />
            <Label htmlFor="Top Text">Top Text</Label>
            <Input
              value={topInput}
              type="text"
              id="Top Text"
              onChange={this.onChangeTop}
            />
            <Label htmlFor="Bottom Text">Bottom Text</Label>
            <Input
              value={bottomInput}
              type="text"
              id="Bottom Text"
              onChange={this.onChangeBottom}
            />
            <Label htmlFor="select">Font Size</Label>

            <Select id="select" value={fontSize} onChange={this.onChangeSelect}>
              {fontSizesOptionsList.map(each => (
                <Option key={each.optionId} value={each.fontSize}>
                  {each.displayText}
                </Option>
              ))}
            </Select>
            <Button type="submit">Generate</Button>
          </Form>
          {generate ? (
            <Output imgUrl={`url(${urlInput})`} data-testid="meme">
              <Para fontSize={fontSize}>{topInput}</Para>
              <Para fontSize={fontSize}>{bottomInput}</Para>
            </Output>
          ) : (
            ''
          )}
        </Wrap>
      </Container>
    )
  }
}

export default MemeGenerator
