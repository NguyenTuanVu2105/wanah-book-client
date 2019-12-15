import React from 'react'
import './BookDetail.css'
import StarRatings from 'react-star-ratings'
import { FaBluetooth } from 'react-icons/fa' 
import { useParams } from 'react-router-dom'

const BookDetail = () => {
    let {id} = useParams();
    console.log(id)
    return (
     <div className="book-detail">
          <div className="book-detail-header">
            <div className="book-detail-image">
              <img src="http://www.thongnghet.com/images/tan-gai-facebook-thongnghet-5.jpg"  />
            </div>
            <div className="book-detail-wrapper">
              <h3>Giáo trình cua gái đại cương</h3>
              <div className="book-detail-author">
                <p>Tác giả:&nbsp;</p>
                <a href="/">Nguyễn Lâm Tặc</a>
              </div>
              <div className="flex-start">
              <StarRatings rating={5} starRatedColor="#ffdc34" numberOfStars={5} starDimension="16px" starSpacing="5px"></StarRatings>
              <b style={{margin:'10px'}}> 5.0 </b>
              <a href="/" style={{color:'blue'}}>(Xem 100 bài review)</a>
              </div>
              <div>
               <button style={{background:'#0000ff94', color:'white'}}>Thêm vào tủ sách</button>
               <button style={{background: '#19b187', color:'white'}}>Mượn sách</button>
            </div>
            </div>
          </div>
          <div className="book-detail-info">
            <div className="book-detail-info-tab">
              <nav>
                <a href="#"><b>Thông tin sách</b></a>
                <a href="#"><b>Bài review</b></a>
                <a href="#"><b>Người sở hữu sách</b></a>
                <a href="#"><b>Sách tương tự</b></a>
              </nav>
            </div>
            <div>
              <b style={{margin:'10px'}}>Nội dung sách</b>
              <p>Anh em mày râu thông thường chia làm 2 loại chính: Gà và Cao thủ. Cao thủ thì không cần nói nhiều rồi, Gà chính là đối tượng đa số trong anh em mày râu ( tớ cũng là loại Gà, Gà quá mức). Còn các chị em xinh đẹp, thông thường gồm 3 loại: Cáo, Sói và số còn lại. Cáo là các chị em bình thường, đáng để cho anh em Gà chinh phục. Sói thì khiếp lắm, cao tay trên Cáo hẳn một cái đầu và một kinh nghiệm tình trường, số còn lại thì ít gây chú ý của Gà. Cần nhớ rằng, Cáo và Sói thích “ăn thịt” Gà lúc nào là chết lúc bấy giờ, chứ Gà làm sao mà ăn thịt Cáo được. Một trong những tình huống mà các chú trống choai rất hay gặp phải là làm thế nào để tình cảm tiến triển từ...</p>
              <b style={{margin:'10px'}}>Thông tin chi tiết</b>
              <table>
                 <tr>
                   <th> Tác giả</th>
                    <td>Nguyễn Lâm Tặc</td>
                 </tr>
                 <tr>
                 <th> Thể loại</th>
                   <td>Sách lý tưởng</td>
                 </tr>
                 <tr>
                   <th> Nhà xuất bản</th>
                   <td>NXB Nhã Nam</td>
                 </tr>
                <tr>
                   <th> Số trang</th>
                   <td>300</td>
                 </tr>
               </table>
               </div>
            </div>
          </div>
    
    )
}

export default BookDetail