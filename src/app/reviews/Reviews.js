import React from 'react'
import { Button, Spin } from 'antd'
import './Reviews.scss'
import ReviewCell from './components/ReviewCell'
import AddReviewModal from './components/AddReviewModal'
import InfiniteScroll from 'react-infinite-scroll-component';
import { getLatestReview } from '../../api/base/review'


export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showToggle: false,
            sortBy: "Mới nhất",
            visible: false,
            reviews: [],
            page: 1, 
            hasMore: true
        }
    }    

    resetData = () => {
        this.fetchData(1, false)
        this.setState({
            page: 1,
            hasMore: true
        })
    }

    fetchData = async(page, append=true) => {
        const result = await getLatestReview(10, page)
        if (result.success) {
            if (result.data.length > 0) {
                if (append) {
                    this.setState({
                        reviews: this.state.reviews.concat(result.data)
                    })
                }
                else {
                    this.setState({
                        reviews: result.data
                    })
                }
            }
            else {
                this.setState({
                    hasMore: false
                })
            }
        }
    }

    componentDidMount() {
        this.fetchData(this.state.page)
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };


    onToggle = () => this.setState({ showToggle: !this.state.showToggle })

    onSetSortBy = sortBy => () => {
        this.setState({ sortBy, showToggle: false })
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    render() {
        return (
            <div>
                <div className="title">
                    <div className="header-title"><b>Sắp xếp theo:</b></div>
                    <div className="header-filter" onClick={this.onToggle}> {this.state.sortBy} </div>
                    <div className="button-down"></div>
                    <Button className="create-review" onClick={this.showModal}>Tạo review</Button>
                </div>
                <AddReviewModal visible={this.state.visible} resetData={this.resetData} setVisible={(vis) => {this.setState({visible: vis})}}></AddReviewModal>
                {
                    this.state.showToggle && (
                        <div className="show-filter">
                            <div className="filter-item" onClick={this.onSetSortBy("Mới nhất")}>Mới nhất</div>
                            <div className="filter-item" onClick={this.onSetSortBy("Mới nhì")}>Mới nhì</div>
                            <div className="filter-item" onClick={this.onSetSortBy("Mới ba")}>Mới ba</div>
                        </div>
                    )
                }
                <InfiniteScroll
                    dataLength={this.state.reviews.length}
                    next={() => {
                        this.fetchData(this.state.page+1)
                        this.setState({
                            page: this.state.page+1
                        })        
                    }}
                    hasMore={this.state.hasMore}
                    loader={<Spin style={{margin: 'auto 0', width: '100%'}} tip="Loading..."></Spin>}
                    >
                {
                    this.state.reviews.map((review, index) => (
                        <ReviewCell key={index} review={review} showImageBook={true}></ReviewCell>
                    ))
                }
                </InfiniteScroll>
            </div>
        )
    }
}
