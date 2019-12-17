import React from 'react'
import { Button, Modal, Input, Row, Col, Avatar } from 'antd'
import './Reviews.scss'
import ReviewCell from './components/ReviewCell'
import { reviews } from './data/Review'
import { books } from '../books/data/Book'
import BookCell from '../books/component/BookCell'
import starRatings from 'react-star-ratings/build/star-ratings'
import StarRatings from 'react-star-ratings'
import AddReviewModal from './components/AddReviewModal'

const { Search } = Input
const { TextArea } = Input

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
                <AddReviewModal visible={this.state.visible} setVisible={(vis) => {this.setState({visible: vis})}}></AddReviewModal>
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
                        <ReviewCell review={review} showImageBook={true}></ReviewCell>
                    ))
                }
            </div>
        )
    }
}
