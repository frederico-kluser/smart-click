import logo from './logo.svg';
import { Link, Text } from '@fluentui/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text>
        When a link has an href,{' '}
        <Link href="https://developer.microsoft.com/en-us/fluentui#/controls/web/link" underline>
          it renders as an anchor tag.
        </Link>{' '}
        Without an href,{' '}
        <Link underline>
          the link is rendered as a button
        </Link>
        . You can also use the disabled attribute to create a{' '}
        <Link disabled href="https://developer.microsoft.com/en-us/fluentui#/controls/web/link" underline>
          disabled link.
        </Link>
      </Text>
      <Text>
        It's not recommended to use Links with imgs because Links are meant to render textual inline content. Buttons
        are inline-block or in the case of imgs, block. However, it is possible to create a linked image button by
        making a button with an unstyled variant and adding the img content and href source to that.
      </Text>
      </header>
    </div>
  );
}

export default App;
