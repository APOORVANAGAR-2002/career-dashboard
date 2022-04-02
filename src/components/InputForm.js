import { Button, Col, Container, DropdownButton, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { BsTypeBold } from "react-icons/bs";
import { BsTypeItalic } from "react-icons/bs";
import { BsTypeUnderline } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
import { BsListOl } from "react-icons/bs";

function InputForm() {
    return (
        <Container fluid className="py-5" style={{ background: '#E5E5E5' }}>
            <h1>Career Dashboard</h1>
            <Container>
                <Row className="my-2">
                    <Col md={7} className='border border-1 d-flex justify-content-center' >
                        <InputGroup >
                            <FormControl style={{ background: '#c4c4c4', borderRadius: '0.7rem' }}
                                placeholder="Title"
                                aria-label="Title"
                            />
                        </InputGroup>
                    </Col>
                    <Col md={5} className='d-flex justify-content-center'>
                        <div style={{ width: '100%', background: '#c4c4c4', borderRadius: '0.8rem' }}>
                            <DropdownButton className="border border-2" variant="transparent" menuVariant="dark" title="Employment Type(Option Choose)">
                                <DropdownItem href="#">Part-time</DropdownItem>
                                <DropdownItem href="#">Contract</DropdownItem>
                                <DropdownItem href="#">Full-time</DropdownItem>
                                <DropdownItem href="#">Temporary</DropdownItem>
                                <DropdownItem href="#">Vounteer</DropdownItem>
                                <DropdownItem href="#">Internship</DropdownItem>
                            </DropdownButton>
                        </div>
                    </Col>
                </Row>

                <Row className="my-2">
                    <Col md={3} className='border border-1 d-flex justify-content-center'>
                        <InputGroup >
                            <FormControl style={{ background: '#c4c4c4', borderRadius: '0.7rem' }}
                                placeholder="Location"
                                aria-label="Location"
                            />
                        </InputGroup>
                    </Col>
                    <Col md={3} className='d-flex justify-content-center'>
                        <div style={{ width: '100%', background: '#c4c4c4', borderRadius: '0.8rem' }}>
                            <DropdownButton className="border border-2" variant="transparent" menuVariant="dark" title="Job section">
                                <DropdownItem href="#">Business Systems</DropdownItem>
                                <DropdownItem href="#">Design</DropdownItem>
                                <DropdownItem href="#">Engineering</DropdownItem>
                                <DropdownItem href="#">Finance</DropdownItem>
                                <DropdownItem href="#">Human Resources</DropdownItem>
                                <DropdownItem href="#">Legal</DropdownItem>
                                <DropdownItem href="#">Marketing</DropdownItem>
                                <DropdownItem href="#">Operations</DropdownItem>
                                <DropdownItem href="#">Product</DropdownItem>
                                <DropdownItem href="#">Sales</DropdownItem>
                                <DropdownItem href="#">Security</DropdownItem>
                                <DropdownItem href="#">Support</DropdownItem>
                            </DropdownButton>
                        </div>
                    </Col>
                    <Col md={3} className='d-flex justify-content-center'>
                        <div style={{ width: '100%', background: '#c4c4c4', borderRadius: '0.8rem' }}>
                            <DropdownButton className="border border-2" variant="transparent" menuVariant="dark" title="Workplace Type">
                                <DropdownItem href="#">
                                    <b>On-site</b>
                                    <p>Employees come to work in-person</p>
                                </DropdownItem>
                                <DropdownItem href="#">
                                    <b>Hybrid</b>
                                    <p>Employees work on-site and off-site</p>
                                </DropdownItem>
                                <DropdownItem href="#">
                                    <b>Remote</b>
                                    <p>Employees work off-site</p>
                                </DropdownItem>
                            </DropdownButton>
                        </div>
                    </Col>
                    <Col md={3} className='border border-1 d-flex justify-content-center'>
                        <InputGroup >
                            <FormControl style={{ background: '#c4c4c4', borderRadius: '0.7rem' }}
                                placeholder="Paid/Gratis(Option Choose)"
                                aria-label="paid"
                            />
                        </InputGroup>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} className='p-2'>
                        <InputGroup >
                            <FormControl style={{ background: '#c4c4c4', borderRadius: '0.7rem' }}
                                as="textarea"
                                placeholder="Short description (150 words)"
                                aria-label="paid"
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </Container>

            <Container className="py-5 bg-white my-5" style={{ borderRadius: '1rem' }}>
                <Row>
                    <Col xs={12} style={{ textAlign: 'left' }} className="p-3">
                        <h2>Add a job description</h2>
                        <h4>Description</h4>
                        <div className="m-2" style={{ color: 'gray' }}>
                            <BsTypeBold size={40} className="p-2" />
                            <BsTypeItalic size={40} className="p-2" />
                            <BsTypeUnderline size={40} className="p-2" />
                            <BsListUl size={40} className="p-2" />
                            <BsListOl size={40} className="p-2" />
                        </div>
                        <Form>
                            <Form.Group>
                                <Form.Control as='textarea' rows={7} />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                <Row style={{ textAlign: 'left' }}>
                    <Col xs={12} >
                        <h2>Add skills</h2>
                        <p style={{ color: 'gray' }}>Add skill keywords to make your job more visible to the right candidates (Select upto 10)</p>
                    </Col>
                    <Col xs={12}>
                        <Button variant="outline-success" style={{ borderRadius: '1.2rem' }} className="px-3">Add skill +</Button>{' '}
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col xs={12} style={{ textAlign: 'right' }}>
                        <Button className="px-3" style={{ backgroundColor: '#c4c4c4', color: '#000000', fontWeight: '700', border: 'none', borderRadius: '0.5rem' }}>Submit</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default InputForm;