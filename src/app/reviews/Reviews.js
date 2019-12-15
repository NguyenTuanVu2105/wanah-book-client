import React from 'react'
import { Button, Modal, Input, Row, Col, Avatar } from 'antd'
import './Reviews.scss'
import ReviewCell from './components/ReviewCell'
import { reviews } from './data/Review'
import { books } from '../books/data/Book'
import BookCell from '../books/component/BookCell'
import starRatings from 'react-star-ratings/build/star-ratings'
import StarRatings from 'react-star-ratings'

const { Search } = Input
const { TextArea } = Input;

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showToggle: false,
            sortBy: "Mới nhất",
            visible: false,
            books: JSON.parse(JSON.stringify(books)),
            selectBook: null,
        }
    }

    onToggle = () => this.setState({ showToggle: !this.state.showToggle })

    onSetSortBy = sortBy => () => {
        this.setState({ sortBy, showToggle: false })
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
            selectBook: null,
            books: JSON.parse(JSON.stringify(books)),
        });
    };

    onChoosenBook = selectBook => () => {
        this.setState({
            selectBook
        })
    }

    onSearch = (value) => {
        const filterBooks = books.filter(book => book.name.toLowerCase().includes(value.toLowerCase()));
        this.setState({ books: filterBooks })
    }

    render() {
        return (
            <div>
                <div className="title">
                    <div className="header-title"><b>Sắp xếp theo:</b></div>
                    <div className="header-filter" onClick={this.onToggle}> {this.state.sortBy} </div>
                    <div className="button-down"></div>
                    <Button className="create-review" onClick={this.showModal}>Tạo review</Button>
                </div>
                <Modal
                    title="Chọn sách review"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    width="50%"
                    style={this.state.selectBook ? {} : { top: 50 }}
                    bodyStyle={{ padding: 0 }}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            Cancel
                        </Button>
                    ]}
                >
                    {
                        !this.state.selectBook ?
                            <div style={{ padding: 24, display: "flex", justifyContent: "center" }}>
                                <Col span={24} offset={12} >
                                    <Search
                                        placeholder="input search text"
                                        onSearch={this.onSearch}
                                        onChange={(event) => this.onSearch(event.target.value)}
                                        style={{ width: "50%" }}
                                    />
                                </Col>
                            </div> :
                            null
                    }
                    {
                        !this.state.selectBook ?
                            <div style={{ height: "calc(100vh - 300px)", overflow: "overlay", width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap", padding: 24, justifyContent: "center" }}>
                                {
                                    this.state.books.map((book, index) => (
                                        <div style={{ width: 160, marginLeft: 10, marginRight: 10 }} onClick={this.onChoosenBook(book)}>
                                            <BookCell
                                                image={book.image}
                                                name={book.name}
                                                star={book.star}
                                                author={book.author}
                                            />
                                        </div>
                                    ))
                                }
                            </div> :
                            <div style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>
                                <BookCell
                                    image={this.state.selectBook.image}
                                    name={this.state.selectBook.name}
                                    star={this.state.selectBook.star}
                                    author={this.state.selectBook.author}
                                />
                                <div style={{display: "flex", flexDirection: "column", width: "70%"}}>
                                    <div style={{ padding: 16, display: "flex", flexDirection: "row", alignItems: "center", height: "40%" }}>
                                        <Avatar size={50} src="https://i.pinimg.com/originals/63/5f/15/635f15672215dc3dbeb16cef5e7ef6f1.jpg" />
                                        <div style={{ paddingLeft: 5 }}>Hồng Hạnh</div>
                                    </div>
                                    <TextArea placeholder="Nhập bình luận của bạn..." rows={4} />
                                    <StarRatings rating={4} starRatedColor="#ffdc34" numberOfStars={5} starDimension="14px" starSpacing="3px"/>
                                </div>
                                
                            </div>
                    }
                </Modal>
                {
                    this.state.showToggle && (
                        <div className="show-filter">
                            <div className="filter-item" onClick={this.onSetSortBy("Mới nhất")}>Mới nhất</div>
                            <div className="filter-item" onClick={this.onSetSortBy("Mới nhì")}>Mới nhì</div>
                            <div className="filter-item" onClick={this.onSetSortBy("Mới ba")}>Mới ba</div>
                        </div>
                    )
                }
                {
                    reviews.map((review, index) => (
                        <ReviewCell review={review}></ReviewCell>
                    ))
                }
            </div>
        )
    }
}