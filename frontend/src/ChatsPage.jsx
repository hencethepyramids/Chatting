import PropTypes from 'prop-types';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return (
    <div style={{ height: '100vh' }}>
        <PrettyChatWindow
            projectId='09f6278f-55dd-4fbe-89de-74c1322482c2'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%'}}
        />
    </div>
  )
}

// Define the expected prop types for the 'user' prop
ChatsPage.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatsPage;
