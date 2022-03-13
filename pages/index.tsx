import { useState } from "react"
import {Button, Col, Form, Row} from "react-bootstrap";
import Navbar from "../components/Navbar";
import TodoCard from "../components/TodoCard";
import {Pencil, Trash} from "react-bootstrap-icons";

const Index = () => {

  const [userInput, setUserInput] = useState<any>()
  const [ todoList, setTodoList ] = useState<any>([])

  const handleInput = (e:any) => {
    e.preventDefault()

    setUserInput(e.target.value)
    console.log(userInput)

  }

    const handleSubmit = (e:any) => {
        e.preventDefault()

        setTodoList([userInput, ...todoList])
        setUserInput('')
    }

  return (
      <>
      <Navbar />
    <div className={'container'}>
        <Row>
            <Col md={6} style={{margin:'0 auto'}}>
                <h1 className={'text-center'}> Todo List</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onChange={handleInput} value={userInput} type="text" placeholder="-----------------------------New Todo-------------------------------" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleSubmit} className={'float-end'} >
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
        <Row>
            <Col md={6} style={{margin:'0 auto'}} >
                <ul>
                    {
                        todoList?.length >0 ? todoList.map((todo:string, index:number) => {
                                return <TodoCard key={index}>{todo}
                                    <Button variant={'danger'} className={'float-end'}>
                                        Delete
                                        <Trash ></Trash>
                                    </Button>
                                    <Button variant={'secondary'} className={'float-end'}>
                                        Edit
                                        <Pencil ></Pencil>
                                    </Button>
                                </TodoCard>
                            })
                            : (
                                <Row>
                                  <p className={'text-center'}>No Task Items To Display</p>
                                </Row>
                            )
                    }
                </ul>
            </Col>
        </Row>

    </div>
      </>
  )
}

export default Index
