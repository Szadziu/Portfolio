import * as P from './parts';

const Comment = ({ error, info, children }) => {
  return (
    <P.Comment info={info} error={error}>
      {children}
    </P.Comment>
  );
};

export default Comment;
