import {Card} from "react-bootstrap";

const TodoCard = ({ children, ...props}) => {
  return(
      <>
          <Card>
              <Card.Body>{children}</Card.Body>
          </Card>
      </>
  )
}

export default TodoCard