import { useUserContext } from "../../context/ContextUser";
import { GetData } from "../../hooks";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'
import Loading from '../../components/loading'
import { Form, Pagination } from "react-bootstrap";
import './main.scss'
const Products = () => {
    const { token } = useUserContext()
    const [filteredResults, setFilteredResults] = useState([]);
    const [results, setResults] = useState({});
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    useEffect(() => {
        setLoading(true);
        GetData('variations', token, page)
            .then((data) => {
                setLoading(false);
                setResults(data);
                setFilteredResults(data.items)
            })
            .then((response) => {
                if (response.status === 200) {
                    setLoading(false);
                }
            })
            .catch(
                (err) => console.log(err),
            );

    }, [setPage, page, token]);

    const Filt = (params) => {
        const filteredData = results.items.filter((item) => {
            return item.name.toLowerCase().includes(params.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
    return (
        <>
            <div className="load-anim container">
                {
                    loading ? (
                        <>
                            <div className="loading-forum load-anim">
                                <Loading />
                            </div>

                        </>
                    )
                        : (
                            <>
                                <div>
                                    <Form.Group className="mb-3 s`earch-label" controlId="exampleForm.ControlInput1">
                                        <Form.Label>поиск по продаже  </Form.Label>
                                        <Form.Control onChange={(e) => Filt(e.target.value)} className="search-input" type="text" placeholder="поиск" />
                                    </Form.Group>
                                    <div>
                                        {filteredResults.map((res, index) => (
                                            <Table key={index} striped bordered hover variant="dark">
                                                <thead>
                                                    <tr>
                                                        <th>имя продажа</th>
                                                        {res.productProperties.map((property, keyProperty) => (
                                                            <th key={keyProperty}>
                                                                {property.name}
                                                            </th>
                                                        ))}
                                                        {res.properties.map((property, keyProperty) => (
                                                            <th key={keyProperty}>
                                                                {property.name}
                                                            </th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{res.name}</td>
                                                        {res.productProperties.map((property, keyProperty) => (
                                                            <td key={keyProperty}>
                                                                {property.value}
                                                            </td>
                                                        ))}
                                                        {res.properties.map((property, keyProperty) => (
                                                            <td key={keyProperty}>
                                                                {property.value}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        ))}
                                    </div>
                                    <Pagination>
                                        <Pagination.Prev onClick={() => setPage(page - 1)} />
                                        <Pagination.Item active>{results.page}</Pagination.Item>
                                        <Pagination.Next onClick={() => setPage(page + 1)} />
                                    </Pagination>
                                </div>
                            </>
                        )
                }
            </div>
        </>
    )
}
export default Products