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

  render() {
    const {fontSize, generate, urlInput, topInput, bottomInput} = this.state
    return (
      <Container>
        <Heading>Meme Generator</Heading>
        <Wrap>
          <Form>
            <Label id="url">Image URL</Label>
            <Input
              value={urlInput}
              type="text"
              htmlFor="url"
              onChange={this.onChangeInput}
            />
            <Label id="top">Top Text</Label>
            <Input
              value={topInput}
              type="text"
              htmlFor="top"
              onChange={this.onChangeTop}
            />
            <Label id="bottom">Bottom Text</Label>
            <Input
              value={bottomInput}
              type="text"
              htmlFor="bottom"
              onChange={this.onChangeBottom}
            />
            <Label>Font Size</Label>

            <Select onChange={this.onChangeSelect}>
              {fontSizesOptionsList.map(each => (
                <Option key={each.optionId} value={each.fontSize}>
                  {each.displayText}
                </Option>
              ))}
            </Select>
            <Button type="button">Generate</Button>
          </Form>
        </Wrap>
      </Container>
    )
  }
}

export default MemeGenerator
